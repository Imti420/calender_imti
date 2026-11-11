export type Lane = "uni" | "varsity" | "engg";
export type Tone = "end" | "exam" | "start" | "varsity" | "engg" | "custom";
export type SymbolMark = "▲" | "■" | "●" | "◆";

export type DeskEvent = {
  id: string;
  date: string;
  label: string;
  tail: string;
  lane: Lane;
  symbol: SymbolMark;
  tone: Tone;
  color: string;
  hoverHead: string;
  hoverMarks: string;
  hoverNote: string;
  seeded: boolean;
};

export type BoardState = {
  deleted: string[];
  patches: Record<string, DeskEvent>;
  custom: DeskEvent[];
  theme: "day" | "night";
  lanes: Record<Lane, boolean>;
};

export const EMPTY_STATE: BoardState = {
  deleted: [],
  patches: {},
  custom: [],
  theme: "day",
  lanes: { uni: true, varsity: true, engg: true },
};

const TONES: Tone[] = ["end", "exam", "start", "varsity", "engg", "custom"];
const LANES: Lane[] = ["uni", "varsity", "engg"];
const SYMBOLS: SymbolMark[] = ["▲", "■", "●", "◆"];

export function isTone(value: string): value is Tone {
  return (TONES as string[]).includes(value);
}
export function isLane(value: string): value is Lane {
  return (LANES as string[]).includes(value);
}
export function isSymbol(value: string): value is SymbolMark {
  return (SYMBOLS as string[]).includes(value);
}

function ev(input: Omit<DeskEvent, "seeded" | "color"> & { color?: string }): DeskEvent {
  return { color: "", seeded: true, ...input };
}

/** Official campus dates already on the desk, plus Udvas KA / Engineering routines. */
export const SEED: DeskEvent[] = [
  ev({ id: "kuet-start", date: "2026-11-10", label: "KUET", tail: "START", lane: "uni", symbol: "●", tone: "start", hoverHead: "UNIVERSITY", hoverMarks: "Apps open · official PDF on file", hoverNote: "Closes 10 Dec" }),
  ev({ id: "du-start", date: "2026-11-11", label: "DU", tail: "START", lane: "uni", symbol: "●", tone: "start", hoverHead: "UNIVERSITY", hoverMarks: "General admission portal opens noon", hoverNote: "Held against the UGC floor" }),
  ev({ id: "cu-start", date: "2026-11-15", label: "CU", tail: "START", lane: "uni", symbol: "●", tone: "start", hoverHead: "UNIVERSITY", hoverMarks: "Application window · provisional", hoverNote: "Confirm on the CU notice" }),
  ev({ id: "dghs-start", date: "2026-11-15", label: "DGHS", tail: "START", lane: "uni", symbol: "●", tone: "start", hoverHead: "UNIVERSITY", hoverMarks: "Medical apps expected mid-November", hoverNote: "Formal PDF still missing" }),
  ev({ id: "ru-start", date: "2026-11-15", label: "RU", tail: "START", lane: "uni", symbol: "●", tone: "start", hoverHead: "UNIVERSITY", hoverMarks: "Apps · tests pushed to 12 Feb", hoverNote: "Reported — no formal PDF yet" }),
  ev({ id: "buet-start", date: "2026-11-21", label: "BUET", tail: "START", lane: "uni", symbol: "●", tone: "start", hoverHead: "UNIVERSITY", hoverMarks: "Apps open · close not announced", hoverNote: "Test 16 Jan · GPA wall holds" }),
  ev({ id: "du-end", date: "2026-11-25", label: "DU", tail: "END", lane: "uni", symbol: "▲", tone: "end", hoverHead: "UNIVERSITY", hoverMarks: "Portal closes 23:59", hoverNote: "Pay on the official portal" }),
  ev({ id: "jnu-start", date: "2026-11-25", label: "JNU", tail: "START", lane: "uni", symbol: "●", tone: "start", hoverHead: "UNIVERSITY", hoverMarks: "Apps open · resit door on SSC marks", hoverNote: "Up to 2 failed subjects" }),
  ev({ id: "ru-end", date: "2026-11-30", label: "RU", tail: "END", lane: "uni", symbol: "▲", tone: "end", hoverHead: "UNIVERSITY", hoverMarks: "Application window closes", hoverNote: "Late window for supplementary passers" }),
  ev({ id: "du-iba", date: "2026-12-05", label: "DU", tail: "EXAM", lane: "uni", symbol: "■", tone: "exam", hoverHead: "UNIVERSITY", hoverMarks: "IBA unit", hoverNote: "On the published DU map" }),
  ev({ id: "cu-end", date: "2026-12-10", label: "CU", tail: "END", lane: "uni", symbol: "▲", tone: "end", hoverHead: "UNIVERSITY", hoverMarks: "Application close · provisional", hoverNote: "" }),
  ev({ id: "jnu-end", date: "2026-12-10", label: "JNU", tail: "END", lane: "uni", symbol: "▲", tone: "end", hoverHead: "UNIVERSITY", hoverMarks: "Application close", hoverNote: "Tests still from 1 Jan" }),
  ev({ id: "kuet-end", date: "2026-12-10", label: "KUET", tail: "END", lane: "uni", symbol: "▲", tone: "end", hoverHead: "UNIVERSITY", hoverMarks: "Apps close 17:00", hoverNote: "Official circular PDF" }),
  ev({ id: "du-ka", date: "2026-12-12", label: "DU", tail: "EXAM", lane: "uni", symbol: "■", tone: "exam", hoverHead: "UNIVERSITY", hoverMarks: "Science / Ka unit", hoverNote: "On the published DU map" }),
  ev({ id: "med-exam", date: "2026-12-18", label: "DGHS", tail: "EXAM", lane: "uni", symbol: "■", tone: "exam", hoverHead: "UNIVERSITY", hoverMarks: "MBBS / BDS admission test", hoverNote: "DGME line · PDF still missing" }),
  ev({ id: "kuet-exam", date: "2027-01-08", label: "KUET", tail: "EXAM", lane: "uni", symbol: "■", tone: "exam", hoverHead: "UNIVERSITY", hoverMarks: "09:30–12:30 · official circular", hoverNote: "HSC Science · PCME bar" }),
  ev({ id: "ruet-exam", date: "2027-01-14", label: "RUET", tail: "EXAM", lane: "uni", symbol: "■", tone: "exam", hoverHead: "UNIVERSITY", hoverMarks: "Admission test", hoverNote: "On the published notice" }),
  ev({ id: "buet-exam", date: "2027-01-16", label: "BUET", tail: "EXAM", lane: "uni", symbol: "■", tone: "exam", hoverHead: "UNIVERSITY", hoverMarks: "Admission test", hoverNote: "Website notice holds the date" }),
  ev({ id: "sust-exam", date: "2027-01-17", label: "SUST", tail: "EXAM", lane: "uni", symbol: "■", tone: "exam", hoverHead: "UNIVERSITY", hoverMarks: "Admission test · reported", hoverNote: "No formal SUST PDF yet" }),
  ev({ id: "ru-exam", date: "2027-02-12", label: "RU", tail: "EXAM", lane: "uni", symbol: "■", tone: "exam", hoverHead: "UNIVERSITY", hoverMarks: "Tests from this date · Business first", hoverNote: "January grid superseded" }),

  ev({ id: "v-18", date: "2026-11-18", label: "VARSITY", tail: "PHY 1", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "MCQ 60×1=60 · Written 16×2.5=40", hoverNote: "" }),
  ev({ id: "v-20", date: "2026-11-20", label: "VARSITY", tail: "PHY 2", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "MCQ 60×1=60 · Written 16×2.5=40", hoverNote: "" }),
  ev({ id: "v-22", date: "2026-11-22", label: "VARSITY", tail: "CHEM 1", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "MCQ 60×1=60 · Written 16×2.5=40", hoverNote: "" }),
  ev({ id: "v-24", date: "2026-11-24", label: "VARSITY", tail: "CHEM 2", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "MCQ 60×1=60 · Written 16×2.5=40", hoverNote: "" }),
  ev({ id: "v-26", date: "2026-11-26", label: "VARSITY", tail: "MATH 1", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "MCQ 60×1=60 · Written 16×2.5=40", hoverNote: "" }),
  ev({ id: "v-28", date: "2026-11-28", label: "VARSITY", tail: "MATH 2", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "MCQ 60×1=60 · Written 16×2.5=40", hoverNote: "" }),
  ev({ id: "v-30", date: "2026-11-30", label: "VARSITY", tail: "BIO", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "Biology 1+2 / Bangla / English", hoverNote: "" }),
  ev({ id: "v-d1", date: "2026-12-01", label: "VARSITY", tail: "CHEM", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "Subject final · Chemistry 1+2", hoverNote: "" }),
  ev({ id: "v-d2", date: "2026-12-02", label: "VARSITY", tail: "PHY", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "Subject final · Physics 1+2", hoverNote: "" }),
  ev({ id: "v-d3", date: "2026-12-03", label: "VARSITY", tail: "MATH", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "Higher math 1+2 / Bangla / English", hoverNote: "" }),
  ev({ id: "v-d5", date: "2026-12-05", label: "VARSITY", tail: "MOCK", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "Final model test 1 · Ka possible", hoverNote: "" }),
  ev({ id: "v-d6", date: "2026-12-06", label: "VARSITY", tail: "MOCK", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "Final model test 2", hoverNote: "" }),
  ev({ id: "v-d7", date: "2026-12-07", label: "VARSITY", tail: "MOCK", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "Final model test 3", hoverNote: "" }),
  ev({ id: "v-d8", date: "2026-12-08", label: "VARSITY", tail: "MOCK", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "Final model test 4", hoverNote: "" }),
  ev({ id: "v-d9", date: "2026-12-09", label: "VARSITY", tail: "MOCK", lane: "varsity", symbol: "◆", tone: "varsity", hoverHead: "VARSITY", hoverMarks: "Final model test 5", hoverNote: "" }),

  ev({ id: "e-18", date: "2026-11-18", label: "ENGG", tail: "PHY 1", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "MCQ 40×1=40 · Written 30×10=300", hoverNote: "" }),
  ev({ id: "e-20", date: "2026-11-20", label: "ENGG", tail: "PHY 2", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "MCQ 40×1=40 · Written 30×10=300", hoverNote: "" }),
  ev({ id: "e-22", date: "2026-11-22", label: "ENGG", tail: "CHEM 2", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "MCQ 40×1=40 · Written 30×10=300", hoverNote: "" }),
  ev({ id: "e-24", date: "2026-11-24", label: "ENGG", tail: "CHEM 1", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "MCQ 40×1=40 · Written 30×10=300", hoverNote: "" }),
  ev({ id: "e-26", date: "2026-11-26", label: "ENGG", tail: "MATH 1", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "MCQ 40×1=40 · Written 30×10=300", hoverNote: "" }),
  ev({ id: "e-28", date: "2026-11-28", label: "ENGG", tail: "MATH 2", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "MCQ 40×1=40 · Written 30×10=300", hoverNote: "" }),
  ev({ id: "e-29", date: "2026-11-29", label: "ENGG", tail: "HM", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Subject final · Higher math 1+2", hoverNote: "" }),
  ev({ id: "e-d1", date: "2026-12-01", label: "ENGG", tail: "PHY", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Subject final · Physics 1+2", hoverNote: "" }),
  ev({ id: "e-d3", date: "2026-12-03", label: "ENGG", tail: "CHEM", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Subject final · Chemistry 1+2", hoverNote: "" }),
  ev({ id: "e-d5", date: "2026-12-05", label: "ENGG", tail: "MIX 1", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "MCQ 25×6=150 · Written 30×10=300", hoverNote: "" }),
  ev({ id: "e-d6", date: "2026-12-06", label: "ENGG", tail: "MIX 2", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "MCQ 25×6=150 · Written 30×10=300", hoverNote: "" }),
  ev({ id: "e-d8", date: "2026-12-08", label: "ENGG", tail: "KA 1", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "DU Ka special exam 1", hoverNote: "" }),
  ev({ id: "e-d9", date: "2026-12-09", label: "ENGG", tail: "KA 2", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "DU Ka special exam 2", hoverNote: "" }),
  ev({ id: "e-d18", date: "2026-12-18", label: "ENGG", tail: "MOCK", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Final model 1 · MCQ special", hoverNote: "" }),
  ev({ id: "e-d20", date: "2026-12-20", label: "ENGG", tail: "MOCK", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Final model 2 · Written · BUET shape", hoverNote: "" }),
  ev({ id: "e-d22", date: "2026-12-22", label: "ENGG", tail: "MOCK", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Final model 3 · MCQ special", hoverNote: "" }),
  ev({ id: "e-d24", date: "2026-12-24", label: "ENGG", tail: "ARCH", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Architecture model test 1", hoverNote: "" }),
  ev({ id: "e-d26", date: "2026-12-26", label: "ENGG", tail: "MOCK", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Final model 5 · MCQ special", hoverNote: "" }),
  ev({ id: "e-d28", date: "2026-12-28", label: "ENGG", tail: "MOCK", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Final model 4 · Written · BUET 60×10=600", hoverNote: "" }),
  ev({ id: "e-d30", date: "2026-12-30", label: "ENGG", tail: "MOCK", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Final model 7 · MCQ special", hoverNote: "" }),
  ev({ id: "e-j3", date: "2027-01-03", label: "ENGG", tail: "MOCK", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Final model 9 · MCQ special", hoverNote: "" }),
  ev({ id: "e-j5", date: "2027-01-05", label: "ENGG", tail: "KUET", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "KUET special exam", hoverNote: "" }),
  ev({ id: "e-j10", date: "2027-01-10", label: "ENGG", tail: "RUET", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "RUET special exam", hoverNote: "" }),
  ev({ id: "e-j11", date: "2027-01-11", label: "ENGG", tail: "MOCK", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Final model 9 · BUET special", hoverNote: "" }),
  ev({ id: "e-j12", date: "2027-01-12", label: "ENGG", tail: "MOCK", lane: "engg", symbol: "◆", tone: "engg", hoverHead: "ENGINEERING", hoverMarks: "Final model 10 · Written 60×10=600", hoverNote: "" }),
];

export function inkFor(hex: string): string {
  const h = hex.replace("#", "");
  if (h.length < 6) return "#141414";
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  if ([r, g, b].some((n) => Number.isNaN(n))) return "#141414";
  const y = (r * 299 + g * 587 + b * 114) / 1000;
  return y > 150 ? "#141414" : "#f4efe6";
}

export function freshEvent(date: string): DeskEvent {
  return {
    id: `mine-${Date.now().toString(36)}`,
    date,
    label: "MINE",
    tail: "START",
    lane: "uni",
    symbol: "●",
    tone: "start",
    color: "#e10600",
    hoverHead: "UNIVERSITY",
    hoverMarks: "",
    hoverNote: "",
    seeded: false,
  };
}

export function visibleEvents(state: BoardState): DeskEvent[] {
  const dropped = new Set(state.deleted);
  const seeded = SEED.filter((event) => !dropped.has(event.id)).map(
    (event) => state.patches[event.id] ?? event,
  );
  return [...seeded, ...state.custom].sort((a, b) =>
    a.date === b.date ? a.label.localeCompare(b.label) : a.date.localeCompare(b.date),
  );
}

const KEY = "board-v1";

export function loadState(): BoardState {
  if (typeof localStorage === "undefined") return EMPTY_STATE;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY_STATE;
    const parsed = JSON.parse(raw) as Partial<BoardState>;
    return {
      deleted: Array.isArray(parsed.deleted) ? parsed.deleted.filter((id) => typeof id === "string") : [],
      patches: parsed.patches && typeof parsed.patches === "object" ? parsed.patches : {},
      custom: Array.isArray(parsed.custom) ? parsed.custom.filter(isEvent) : [],
      theme: parsed.theme === "night" ? "night" : "day",
      lanes: {
        uni: parsed.lanes?.uni !== false,
        varsity: parsed.lanes?.varsity !== false,
        engg: parsed.lanes?.engg !== false,
      },
    };
  } catch {
    return EMPTY_STATE;
  }
}

function isEvent(value: unknown): value is DeskEvent {
  if (!value || typeof value !== "object") return false;
  const event = value as DeskEvent;
  return typeof event.id === "string" && typeof event.date === "string" && typeof event.label === "string";
}

export function saveState(state: BoardState) {
  localStorage.setItem(KEY, JSON.stringify(state));
}
