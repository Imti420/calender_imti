import { useEffect, useMemo, useState, type Dispatch, type SetStateAction } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import {
  EMPTY_STATE,
  SEED,
  freshEvent,
  inkFor,
  loadState,
  saveState,
  visibleEvents,
  type BoardState,
  type DeskEvent,
  type Lane,
  type SymbolMark,
  type Tone,
} from "@/lib/board-model";


/** Calendar day in Bangladesh — avoids UTC SSR being "yesterday". */
function dhakaYmd(d: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

function parseYmd(ymd: string): Date {
  return new Date(`${ymd}T12:00:00`);
}

const WEEK_FULL = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const WEEK_SHORT = ["S", "M", "T", "W", "T", "F", "S"];
const TONE_CHOICES: { id: Tone; label: string }[] = [
  { id: "end", label: "END" },
  { id: "exam", label: "EXAM" },
  { id: "start", label: "START" },
  { id: "varsity", label: "VARSITY" },
  { id: "engg", label: "ENGG" },
  { id: "custom", label: "CUSTOM" },
];

function useIsPhone() {
  const [phone, setPhone] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const apply = () => setPhone(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return phone;
}

export function Board() {
  const [state, setState] = useState<BoardState>(EMPTY_STATE);
  const [cursor, setCursor] = useState(() => startOfMonth(parseYmd(dhakaYmd())));
  const [draft, setDraft] = useState<DeskEvent | null>(null);
  const [creating, setCreating] = useState(false);
  const [tip, setTip] = useState<{ event: DeskEvent; x: number; y: number } | null>(null);
  const [ready, setReady] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [dayList, setDayList] = useState<string | null>(null);
  const isPhone = useIsPhone();
  const maxChips = isPhone ? 2 : 4;
  const weekLabels = isPhone ? WEEK_SHORT : WEEK_FULL;

  useEffect(() => {
    const loaded = loadState();
    setState(loaded);
    document.documentElement.dataset.theme = loaded.theme;
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveState(state);
    document.documentElement.dataset.theme = state.theme;
  }, [state, ready]);

  const events = useMemo(() => visibleEvents(state), [state]);
  const todayKey = dhakaYmd();
  const today = parseYmd(todayKey);

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(cursor));
    const end = endOfWeek(endOfMonth(cursor));
    return eachDayOfInterval({ start, end });
  }, [cursor]);

  function commit(next: DeskEvent) {
    setState((current) => {
      if (next.seeded && SEED_IDS.has(next.id)) {
        return { ...current, patches: { ...current.patches, [next.id]: next } };
      }
      const exists = current.custom.some((event) => event.id === next.id);
      return {
        ...current,
        custom: exists
          ? current.custom.map((event) => (event.id === next.id ? next : event))
          : [...current.custom, { ...next, seeded: false }],
      };
    });
    setDraft(null);
    setCreating(false);
  }

  function remove(event: DeskEvent) {
    setState((current) => {
      if (event.seeded && SEED_IDS.has(event.id)) {
        const patches = { ...current.patches };
        delete patches[event.id];
        return { ...current, deleted: [...current.deleted, event.id], patches };
      }
      return { ...current, custom: current.custom.filter((item) => item.id !== event.id) };
    });
    setDraft(null);
    setCreating(false);
  }

  function openNew(date: Date) {
    setCreating(true);
    setDraft(freshEvent(dhakaYmd(date)));
    setTip(null);
  }

  const shown = (event: DeskEvent) => state.lanes[event.lane];

  return (
    <main className="app">
      <header className="top">
        <div className="brand">
          <div className="mark">
            B<i>//</i>OARD
          </div>
          <p className="sub">ADMISSION + COACHING</p>
        </div>
        <div className="tools">
          <div className="nav-month">
            <button className="icon-btn" type="button" aria-label="Previous month" onClick={() => setCursor((d) => addMonths(d, -1))}>
              ‹
            </button>
            <div className="month-label">{format(cursor, "MMM yyyy").toUpperCase()}</div>
            <button className="icon-btn" type="button" aria-label="Next month" onClick={() => setCursor((d) => addMonths(d, 1))}>
              ›
            </button>
          </div>
          <button className="pill" type="button" onClick={() => setCursor(startOfMonth(parseYmd(dhakaYmd())))}>
            TODAY
          </button>
          <LaneToggle lane="uni" label="UNI" state={state} setState={setState} />
          <LaneToggle lane="varsity" label="VARSITY" state={state} setState={setState} />
          <LaneToggle lane="engg" label="ENGG" state={state} setState={setState} />
          <button
            className="pill"
            type="button"
            onClick={() =>
              setState((current) => ({
                ...current,
                theme: current.theme === "day" ? "night" : "day",
              }))
            }
          >
            {state.theme === "day" ? "NIGHT" : "DAY"}
          </button>
          <button className="pill add" type="button" onClick={() => openNew(cursor)}>
            ADD
          </button>
        </div>
      </header>

      <div className="board-scroll">
        <div className="board-inner">
          <div className="week">
            {weekLabels.map((day, i) => (
              <span key={`${day}-${i}`}>{day}</span>
            ))}
          </div>
          <div className="grid">
            {days.map((day) => {
              const dayKey = dhakaYmd(day);
              const key = dayKey;
              const mine = events.filter((event) => event.date === key && shown(event));
              const visible = mine.slice(0, maxChips);
              const extra = mine.length - visible.length;
              const past = dayKey < todayKey;
              const isToday = dayKey === todayKey;
              const deadline = mine.some((event) => event.tone === "end" || event.tail === "END");
              return (
                <div
                  key={key}
                  className={[
                    "day",
                    isSameMonth(day, cursor) ? "" : "out",
                    past ? "past" : "",
                    deadline ? "deadline" : "",
                    isToday ? "today" : "",
                  ].join(" ")}
                >
                  <button className="num" type="button" onClick={() => openNew(day)}>
                    {format(day, "d")}
                  </button>
                  <div className="chips">
                    {visible.map((event) => (
                      <Chip
                        key={event.id}
                        event={event}
                        compact={isPhone}
                        onOpen={() => {
                          setCreating(false);
                          setDraft(event);
                          setTip(null);
                        }}
                        onHover={(x, y) => {
                          if (isPhone) return;
                          setTip({ event, x, y });
                        }}
                        onLeave={() => setTip(null)}
                      />
                    ))}
                    {extra > 0 ? (
                      <button className="more" type="button" onClick={() => setDayList(key)}>
                        +{extra}
                      </button>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="legend">
        <i>▲ END</i>
        <i>■ EXAM</i>
        <i>● START</i>
        <i>◆ COACHING</i>
        <i>HOVER A CHIP · TAP THE DATE TO ADD</i>
        <button className="pill" type="button" onClick={() => setConfirmReset(true)}>
          RESET
        </button>
      </div>

      {tip && tip.event.hoverHead ? (
        <div className="tip" style={{ left: tip.x, top: tip.y }}>
          <b>{tip.event.hoverHead}</b>
          {tip.event.hoverMarks ? <p>{tip.event.hoverMarks}</p> : null}
          {tip.event.hoverNote ? <p>{tip.event.hoverNote}</p> : null}
        </div>
      ) : null}

      {draft ? (
        <Editor
          draft={draft}
          creating={creating}
          onChange={setDraft}
          onSave={() => commit(draft)}
          onDelete={() => remove(draft)}
          onClose={() => {
            setDraft(null);
            setCreating(false);
          }}
        />
      ) : null}

      {dayList ? (
        <div className="sheet-back" onClick={() => setDayList(null)}>
          <div className="sheet" onClick={(event) => event.stopPropagation()}>
            <h2>{format(new Date(`${dayList}T12:00:00`), "d MMM").toUpperCase()}</h2>
            <p className="hint">All chips on this day. Tap one to edit.</p>
            <div className="chips" style={{ gap: 8 }}>
              {events
                .filter((event) => event.date === dayList && shown(event))
                .map((event) => (
                  <Chip
                    key={event.id}
                    event={event}
                    onOpen={() => {
                      setDayList(null);
                      setCreating(false);
                      setDraft(event);
                    }}
                    onHover={() => undefined}
                    onLeave={() => undefined}
                  />
                ))}
            </div>
            <div className="row-actions">
              <button
                className="pill add"
                type="button"
                onClick={() => {
                  setDayList(null);
                  openNew(new Date(`${dayList}T12:00:00`));
                }}
              >
                ADD
              </button>
              <button className="pill" type="button" onClick={() => setDayList(null)}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {confirmReset ? (
        <div className="sheet-back" onClick={() => setConfirmReset(false)}>
          <form
            className="sheet"
            onClick={(event) => event.stopPropagation()}
            onSubmit={(event) => {
              event.preventDefault();
              setState((current) => ({ ...EMPTY_STATE, theme: current.theme }));
              setConfirmReset(false);
            }}
          >
            <h2>WIPE THE BOARD?</h2>
            <p className="hint">Deletes your chips and restores the admission and coaching defaults.</p>
            <div className="row-actions">
              <button className="pill add" type="submit">
                RESET
              </button>
              <button className="pill" type="button" onClick={() => setConfirmReset(false)}>
                KEEP
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </main>
  );
}

const SEED_IDS = new Set(SEED.map((event) => event.id));

function LaneToggle({
  lane,
  label,
  state,
  setState,
}: {
  lane: Lane;
  label: string;
  state: BoardState;
  setState: Dispatch<SetStateAction<BoardState>>;
}) {
  const on = state.lanes[lane];
  return (
    <button
      className={`lane ${lane} ${on ? "on" : ""}`}
      type="button"
      onClick={() =>
        setState((current) => ({
          ...current,
          lanes: { ...current.lanes, [lane]: !current.lanes[lane] },
        }))
      }
    >
      {label}
    </button>
  );
}

function Chip({
  event,
  onOpen,
  onHover,
  onLeave,
  compact = false,
}: {
  event: DeskEvent;
  onOpen: () => void;
  onHover: (x: number, y: number) => void;
  onLeave: () => void;
  compact?: boolean;
}) {
  const custom =
    event.tone === "custom"
      ? {
          background: event.color || "#e10600",
          color: inkFor(event.color || "#e10600"),
          borderColor: inkFor(event.color || "#e10600"),
        }
      : undefined;
  const shortLabel =
    compact && event.label.length > 6 ? event.label.slice(0, 5) : event.label;
  return (
    <button
      type="button"
      className={`chip tone-${event.tone}`}
      style={custom}
      onClick={onOpen}
      onMouseEnter={(hoverEvent) => {
        const box = hoverEvent.currentTarget.getBoundingClientRect();
        const left = Math.min(box.left, window.innerWidth - 300);
        const top = box.bottom + 8;
        onHover(Math.max(8, left), top + 72 > window.innerHeight ? box.top - 88 : top);
      }}
      onMouseLeave={onLeave}
      onFocus={(hoverEvent) => {
        const box = hoverEvent.currentTarget.getBoundingClientRect();
        onHover(Math.max(8, box.left), box.bottom + 8);
      }}
      onBlur={onLeave}
    >
      <span className="chip-left">
        <span>{event.symbol}</span>
        <span>{shortLabel}</span>
      </span>
      {!compact ? <span className="chip-tail">{event.tail}</span> : null}
    </button>
  );
}

function Editor({
  draft,
  creating,
  onChange,
  onSave,
  onDelete,
  onClose,
}: {
  draft: DeskEvent;
  creating: boolean;
  onChange: (event: DeskEvent) => void;
  onSave: () => void;
  onDelete: () => void;
  onClose: () => void;
}) {
  function set<K extends keyof DeskEvent>(key: K, value: DeskEvent[K]) {
    onChange({ ...draft, [key]: value });
  }

  return (
    <div className="sheet-back" onClick={onClose}>
      <form
        className="sheet"
        onClick={(event) => event.stopPropagation()}
        onSubmit={(event) => {
          event.preventDefault();
          if (!draft.label.trim() || !draft.date) return;
          onSave();
        }}
      >
        <h2>{creating ? "NEW CHIP" : "EDIT CHIP"}</h2>
        <p className="hint">Color, symbol, and the hover card are yours. Hover stays to two lines unless you add a note.</p>
        <div className="preview-chip">
          <Chip event={draft} onOpen={() => undefined} onHover={() => undefined} onLeave={() => undefined} />
        </div>
        {draft.hoverHead ? (
          <div className="tip" style={{ position: "static", width: "100%", marginBottom: 14 }}>
            <b>{draft.hoverHead}</b>
            {draft.hoverMarks ? <p>{draft.hoverMarks}</p> : null}
            {draft.hoverNote ? <p>{draft.hoverNote}</p> : null}
          </div>
        ) : null}

        <label className="field">
          DATE
          <input type="date" value={draft.date} onChange={(event) => set("date", event.target.value)} required />
        </label>
        <label className="field">
          LABEL
          <input value={draft.label} maxLength={16} onChange={(event) => set("label", event.target.value.toUpperCase())} required />
        </label>
        <label className="field">
          TAIL
          <input value={draft.tail} maxLength={12} onChange={(event) => set("tail", event.target.value.toUpperCase())} />
        </label>
        <label className="field">
          LANE
          <select value={draft.lane} onChange={(event) => set("lane", event.target.value as Lane)}>
            <option value="uni">UNIVERSITY</option>
            <option value="varsity">VARSITY</option>
            <option value="engg">ENGINEERING</option>
          </select>
        </label>
        <label className="field">
          SYMBOL
          <select value={draft.symbol} onChange={(event) => set("symbol", event.target.value as SymbolMark)}>
            <option value="▲">▲ END</option>
            <option value="■">■ EXAM</option>
            <option value="●">● START</option>
            <option value="◆">◆ COACHING</option>
          </select>
        </label>
        <div className="field">
          COLOR
          <div className="swatches">
            {TONE_CHOICES.map((tone) => (
              <button
                key={tone.id}
                type="button"
                className={`swatch tone-${tone.id} ${draft.tone === tone.id ? "on" : ""}`}
                style={tone.id === "custom" ? { background: draft.color || "#e10600" } : undefined}
                aria-label={tone.label}
                onClick={() => set("tone", tone.id)}
              />
            ))}
            {draft.tone === "custom" ? (
              <input
                aria-label="Custom color"
                type="color"
                value={draft.color || "#e10600"}
                onChange={(event) => set("color", event.target.value)}
              />
            ) : null}
          </div>
        </div>
        <label className="field">
          HOVER HEADING
          <input
            value={draft.hoverHead}
            onChange={(event) => set("hoverHead", event.target.value.toUpperCase())}
            placeholder="VARSITY"
          />
        </label>
        <label className="field">
          NUMBER DISTRIBUTION
          <textarea
            rows={2}
            value={draft.hoverMarks}
            onChange={(event) => set("hoverMarks", event.target.value)}
            placeholder="MCQ 60×1=60 · Written 16×2.5=40"
          />
        </label>
        <label className="field">
          EXTRA LINE
          <input value={draft.hoverNote} onChange={(event) => set("hoverNote", event.target.value)} />
        </label>
        <div className="row-actions">
          <button className="pill add" type="submit">
            SAVE
          </button>
          <button className="pill" type="button" onClick={onClose}>
            CLOSE
          </button>
          {!creating ? (
            <button className="pill" type="button" onClick={onDelete}>
              DELETE
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
}
