import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as endOfWeek, c as endOfMonth, d as addMonths, i as format, l as isSameDay, n as isSameMonth, o as startOfMonth, r as isBefore, s as eachDayOfInterval, t as startOfToday, u as startOfWeek } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D3VrTeXg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMPTY_STATE = {
	deleted: [],
	patches: {},
	custom: [],
	theme: "day",
	lanes: {
		uni: true,
		varsity: true,
		engg: true
	}
};
function ev(input) {
	return {
		color: "",
		seeded: true,
		...input
	};
}
/** Official campus dates already on the desk, plus Udvas KA / Engineering routines. */
var SEED = [
	ev({
		id: "kuet-start",
		date: "2026-11-10",
		label: "KUET",
		tail: "START",
		lane: "uni",
		symbol: "●",
		tone: "start",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Apps open · official PDF on file",
		hoverNote: "Closes 10 Dec"
	}),
	ev({
		id: "du-start",
		date: "2026-11-11",
		label: "DU",
		tail: "START",
		lane: "uni",
		symbol: "●",
		tone: "start",
		hoverHead: "UNIVERSITY",
		hoverMarks: "General admission portal opens noon",
		hoverNote: "Held against the UGC floor"
	}),
	ev({
		id: "cu-start",
		date: "2026-11-15",
		label: "CU",
		tail: "START",
		lane: "uni",
		symbol: "●",
		tone: "start",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Application window · provisional",
		hoverNote: "Confirm on the CU notice"
	}),
	ev({
		id: "dghs-start",
		date: "2026-11-15",
		label: "DGHS",
		tail: "START",
		lane: "uni",
		symbol: "●",
		tone: "start",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Medical apps expected mid-November",
		hoverNote: "Formal PDF still missing"
	}),
	ev({
		id: "ru-start",
		date: "2026-11-15",
		label: "RU",
		tail: "START",
		lane: "uni",
		symbol: "●",
		tone: "start",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Apps · tests pushed to 12 Feb",
		hoverNote: "Reported — no formal PDF yet"
	}),
	ev({
		id: "buet-start",
		date: "2026-11-21",
		label: "BUET",
		tail: "START",
		lane: "uni",
		symbol: "●",
		tone: "start",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Apps open · close not announced",
		hoverNote: "Test 16 Jan · GPA wall holds"
	}),
	ev({
		id: "du-end",
		date: "2026-11-25",
		label: "DU",
		tail: "END",
		lane: "uni",
		symbol: "▲",
		tone: "end",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Portal closes 23:59",
		hoverNote: "Pay on the official portal"
	}),
	ev({
		id: "jnu-start",
		date: "2026-11-25",
		label: "JNU",
		tail: "START",
		lane: "uni",
		symbol: "●",
		tone: "start",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Apps open · resit door on SSC marks",
		hoverNote: "Up to 2 failed subjects"
	}),
	ev({
		id: "ru-end",
		date: "2026-11-30",
		label: "RU",
		tail: "END",
		lane: "uni",
		symbol: "▲",
		tone: "end",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Application window closes",
		hoverNote: "Late window for supplementary passers"
	}),
	ev({
		id: "du-iba",
		date: "2026-12-05",
		label: "DU",
		tail: "EXAM",
		lane: "uni",
		symbol: "■",
		tone: "exam",
		hoverHead: "UNIVERSITY",
		hoverMarks: "IBA unit",
		hoverNote: "On the published DU map"
	}),
	ev({
		id: "cu-end",
		date: "2026-12-10",
		label: "CU",
		tail: "END",
		lane: "uni",
		symbol: "▲",
		tone: "end",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Application close · provisional",
		hoverNote: ""
	}),
	ev({
		id: "jnu-end",
		date: "2026-12-10",
		label: "JNU",
		tail: "END",
		lane: "uni",
		symbol: "▲",
		tone: "end",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Application close",
		hoverNote: "Tests still from 1 Jan"
	}),
	ev({
		id: "kuet-end",
		date: "2026-12-10",
		label: "KUET",
		tail: "END",
		lane: "uni",
		symbol: "▲",
		tone: "end",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Apps close 17:00",
		hoverNote: "Official circular PDF"
	}),
	ev({
		id: "du-ka",
		date: "2026-12-12",
		label: "DU",
		tail: "EXAM",
		lane: "uni",
		symbol: "■",
		tone: "exam",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Science / Ka unit",
		hoverNote: "On the published DU map"
	}),
	ev({
		id: "med-exam",
		date: "2026-12-18",
		label: "DGHS",
		tail: "EXAM",
		lane: "uni",
		symbol: "■",
		tone: "exam",
		hoverHead: "UNIVERSITY",
		hoverMarks: "MBBS / BDS admission test",
		hoverNote: "DGME line · PDF still missing"
	}),
	ev({
		id: "kuet-exam",
		date: "2027-01-08",
		label: "KUET",
		tail: "EXAM",
		lane: "uni",
		symbol: "■",
		tone: "exam",
		hoverHead: "UNIVERSITY",
		hoverMarks: "09:30–12:30 · official circular",
		hoverNote: "HSC Science · PCME bar"
	}),
	ev({
		id: "ruet-exam",
		date: "2027-01-14",
		label: "RUET",
		tail: "EXAM",
		lane: "uni",
		symbol: "■",
		tone: "exam",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Admission test",
		hoverNote: "On the published notice"
	}),
	ev({
		id: "buet-exam",
		date: "2027-01-16",
		label: "BUET",
		tail: "EXAM",
		lane: "uni",
		symbol: "■",
		tone: "exam",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Admission test",
		hoverNote: "Website notice holds the date"
	}),
	ev({
		id: "sust-exam",
		date: "2027-01-17",
		label: "SUST",
		tail: "EXAM",
		lane: "uni",
		symbol: "■",
		tone: "exam",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Admission test · reported",
		hoverNote: "No formal SUST PDF yet"
	}),
	ev({
		id: "ru-exam",
		date: "2027-02-12",
		label: "RU",
		tail: "EXAM",
		lane: "uni",
		symbol: "■",
		tone: "exam",
		hoverHead: "UNIVERSITY",
		hoverMarks: "Tests from this date · Business first",
		hoverNote: "January grid superseded"
	}),
	ev({
		id: "v-18",
		date: "2026-11-18",
		label: "VARSITY",
		tail: "PHY 1",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "MCQ 60×1=60 · Written 16×2.5=40",
		hoverNote: ""
	}),
	ev({
		id: "v-20",
		date: "2026-11-20",
		label: "VARSITY",
		tail: "PHY 2",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "MCQ 60×1=60 · Written 16×2.5=40",
		hoverNote: ""
	}),
	ev({
		id: "v-22",
		date: "2026-11-22",
		label: "VARSITY",
		tail: "CHEM 1",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "MCQ 60×1=60 · Written 16×2.5=40",
		hoverNote: ""
	}),
	ev({
		id: "v-24",
		date: "2026-11-24",
		label: "VARSITY",
		tail: "CHEM 2",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "MCQ 60×1=60 · Written 16×2.5=40",
		hoverNote: ""
	}),
	ev({
		id: "v-26",
		date: "2026-11-26",
		label: "VARSITY",
		tail: "MATH 1",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "MCQ 60×1=60 · Written 16×2.5=40",
		hoverNote: ""
	}),
	ev({
		id: "v-28",
		date: "2026-11-28",
		label: "VARSITY",
		tail: "MATH 2",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "MCQ 60×1=60 · Written 16×2.5=40",
		hoverNote: ""
	}),
	ev({
		id: "v-30",
		date: "2026-11-30",
		label: "VARSITY",
		tail: "BIO",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "Biology 1+2 / Bangla / English",
		hoverNote: ""
	}),
	ev({
		id: "v-d1",
		date: "2026-12-01",
		label: "VARSITY",
		tail: "CHEM",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "Subject final · Chemistry 1+2",
		hoverNote: ""
	}),
	ev({
		id: "v-d2",
		date: "2026-12-02",
		label: "VARSITY",
		tail: "PHY",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "Subject final · Physics 1+2",
		hoverNote: ""
	}),
	ev({
		id: "v-d3",
		date: "2026-12-03",
		label: "VARSITY",
		tail: "MATH",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "Higher math 1+2 / Bangla / English",
		hoverNote: ""
	}),
	ev({
		id: "v-d5",
		date: "2026-12-05",
		label: "VARSITY",
		tail: "MOCK",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "Final model test 1 · Ka possible",
		hoverNote: ""
	}),
	ev({
		id: "v-d6",
		date: "2026-12-06",
		label: "VARSITY",
		tail: "MOCK",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "Final model test 2",
		hoverNote: ""
	}),
	ev({
		id: "v-d7",
		date: "2026-12-07",
		label: "VARSITY",
		tail: "MOCK",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "Final model test 3",
		hoverNote: ""
	}),
	ev({
		id: "v-d8",
		date: "2026-12-08",
		label: "VARSITY",
		tail: "MOCK",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "Final model test 4",
		hoverNote: ""
	}),
	ev({
		id: "v-d9",
		date: "2026-12-09",
		label: "VARSITY",
		tail: "MOCK",
		lane: "varsity",
		symbol: "◆",
		tone: "varsity",
		hoverHead: "VARSITY",
		hoverMarks: "Final model test 5",
		hoverNote: ""
	}),
	ev({
		id: "e-18",
		date: "2026-11-18",
		label: "ENGG",
		tail: "PHY 1",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "MCQ 40×1=40 · Written 30×10=300",
		hoverNote: ""
	}),
	ev({
		id: "e-20",
		date: "2026-11-20",
		label: "ENGG",
		tail: "PHY 2",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "MCQ 40×1=40 · Written 30×10=300",
		hoverNote: ""
	}),
	ev({
		id: "e-22",
		date: "2026-11-22",
		label: "ENGG",
		tail: "CHEM 2",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "MCQ 40×1=40 · Written 30×10=300",
		hoverNote: ""
	}),
	ev({
		id: "e-24",
		date: "2026-11-24",
		label: "ENGG",
		tail: "CHEM 1",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "MCQ 40×1=40 · Written 30×10=300",
		hoverNote: ""
	}),
	ev({
		id: "e-26",
		date: "2026-11-26",
		label: "ENGG",
		tail: "MATH 1",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "MCQ 40×1=40 · Written 30×10=300",
		hoverNote: ""
	}),
	ev({
		id: "e-28",
		date: "2026-11-28",
		label: "ENGG",
		tail: "MATH 2",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "MCQ 40×1=40 · Written 30×10=300",
		hoverNote: ""
	}),
	ev({
		id: "e-29",
		date: "2026-11-29",
		label: "ENGG",
		tail: "HM",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Subject final · Higher math 1+2",
		hoverNote: ""
	}),
	ev({
		id: "e-d1",
		date: "2026-12-01",
		label: "ENGG",
		tail: "PHY",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Subject final · Physics 1+2",
		hoverNote: ""
	}),
	ev({
		id: "e-d3",
		date: "2026-12-03",
		label: "ENGG",
		tail: "CHEM",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Subject final · Chemistry 1+2",
		hoverNote: ""
	}),
	ev({
		id: "e-d5",
		date: "2026-12-05",
		label: "ENGG",
		tail: "MIX 1",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "MCQ 25×6=150 · Written 30×10=300",
		hoverNote: ""
	}),
	ev({
		id: "e-d6",
		date: "2026-12-06",
		label: "ENGG",
		tail: "MIX 2",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "MCQ 25×6=150 · Written 30×10=300",
		hoverNote: ""
	}),
	ev({
		id: "e-d8",
		date: "2026-12-08",
		label: "ENGG",
		tail: "KA 1",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "DU Ka special exam 1",
		hoverNote: ""
	}),
	ev({
		id: "e-d9",
		date: "2026-12-09",
		label: "ENGG",
		tail: "KA 2",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "DU Ka special exam 2",
		hoverNote: ""
	}),
	ev({
		id: "e-d18",
		date: "2026-12-18",
		label: "ENGG",
		tail: "MOCK",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Final model 1 · MCQ special",
		hoverNote: ""
	}),
	ev({
		id: "e-d20",
		date: "2026-12-20",
		label: "ENGG",
		tail: "MOCK",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Final model 2 · Written · BUET shape",
		hoverNote: ""
	}),
	ev({
		id: "e-d22",
		date: "2026-12-22",
		label: "ENGG",
		tail: "MOCK",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Final model 3 · MCQ special",
		hoverNote: ""
	}),
	ev({
		id: "e-d24",
		date: "2026-12-24",
		label: "ENGG",
		tail: "ARCH",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Architecture model test 1",
		hoverNote: ""
	}),
	ev({
		id: "e-d26",
		date: "2026-12-26",
		label: "ENGG",
		tail: "MOCK",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Final model 5 · MCQ special",
		hoverNote: ""
	}),
	ev({
		id: "e-d28",
		date: "2026-12-28",
		label: "ENGG",
		tail: "MOCK",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Final model 4 · Written · BUET 60×10=600",
		hoverNote: ""
	}),
	ev({
		id: "e-d30",
		date: "2026-12-30",
		label: "ENGG",
		tail: "MOCK",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Final model 7 · MCQ special",
		hoverNote: ""
	}),
	ev({
		id: "e-j3",
		date: "2027-01-03",
		label: "ENGG",
		tail: "MOCK",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Final model 9 · MCQ special",
		hoverNote: ""
	}),
	ev({
		id: "e-j5",
		date: "2027-01-05",
		label: "ENGG",
		tail: "KUET",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "KUET special exam",
		hoverNote: ""
	}),
	ev({
		id: "e-j10",
		date: "2027-01-10",
		label: "ENGG",
		tail: "RUET",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "RUET special exam",
		hoverNote: ""
	}),
	ev({
		id: "e-j11",
		date: "2027-01-11",
		label: "ENGG",
		tail: "MOCK",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Final model 9 · BUET special",
		hoverNote: ""
	}),
	ev({
		id: "e-j12",
		date: "2027-01-12",
		label: "ENGG",
		tail: "MOCK",
		lane: "engg",
		symbol: "◆",
		tone: "engg",
		hoverHead: "ENGINEERING",
		hoverMarks: "Final model 10 · Written 60×10=600",
		hoverNote: ""
	})
];
function inkFor(hex) {
	const h = hex.replace("#", "");
	if (h.length < 6) return "#141414";
	const r = Number.parseInt(h.slice(0, 2), 16);
	const g = Number.parseInt(h.slice(2, 4), 16);
	const b = Number.parseInt(h.slice(4, 6), 16);
	if ([
		r,
		g,
		b
	].some((n) => Number.isNaN(n))) return "#141414";
	return (r * 299 + g * 587 + b * 114) / 1e3 > 150 ? "#141414" : "#f4efe6";
}
function freshEvent(date) {
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
		seeded: false
	};
}
function visibleEvents(state) {
	const dropped = new Set(state.deleted);
	return [...SEED.filter((event) => !dropped.has(event.id)).map((event) => state.patches[event.id] ?? event), ...state.custom].sort((a, b) => a.date === b.date ? a.label.localeCompare(b.label) : a.date.localeCompare(b.date));
}
var KEY = "board-v1";
function loadState() {
	if (typeof localStorage === "undefined") return EMPTY_STATE;
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return EMPTY_STATE;
		const parsed = JSON.parse(raw);
		return {
			deleted: Array.isArray(parsed.deleted) ? parsed.deleted.filter((id) => typeof id === "string") : [],
			patches: parsed.patches && typeof parsed.patches === "object" ? parsed.patches : {},
			custom: Array.isArray(parsed.custom) ? parsed.custom.filter(isEvent) : [],
			theme: parsed.theme === "night" ? "night" : "day",
			lanes: {
				uni: parsed.lanes?.uni !== false,
				varsity: parsed.lanes?.varsity !== false,
				engg: parsed.lanes?.engg !== false
			}
		};
	} catch {
		return EMPTY_STATE;
	}
}
function isEvent(value) {
	if (!value || typeof value !== "object") return false;
	const event = value;
	return typeof event.id === "string" && typeof event.date === "string" && typeof event.label === "string";
}
function saveState(state) {
	localStorage.setItem(KEY, JSON.stringify(state));
}
var WEEK = [
	"SUN",
	"MON",
	"TUE",
	"WED",
	"THU",
	"FRI",
	"SAT"
];
var MAX_CHIPS = 4;
var TONE_CHOICES = [
	{
		id: "end",
		label: "END"
	},
	{
		id: "exam",
		label: "EXAM"
	},
	{
		id: "start",
		label: "START"
	},
	{
		id: "varsity",
		label: "VARSITY"
	},
	{
		id: "engg",
		label: "ENGG"
	},
	{
		id: "custom",
		label: "CUSTOM"
	}
];
function Board() {
	const [state, setState] = (0, import_react.useState)(EMPTY_STATE);
	const [cursor, setCursor] = (0, import_react.useState)(() => startOfMonth(/* @__PURE__ */ new Date()));
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [creating, setCreating] = (0, import_react.useState)(false);
	const [tip, setTip] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [confirmReset, setConfirmReset] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const loaded = loadState();
		setState(loaded);
		document.documentElement.dataset.theme = loaded.theme;
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		saveState(state);
		document.documentElement.dataset.theme = state.theme;
	}, [state, ready]);
	const events = (0, import_react.useMemo)(() => visibleEvents(state), [state]);
	const today = startOfToday();
	const days = (0, import_react.useMemo)(() => {
		const start = startOfWeek(startOfMonth(cursor));
		const end = endOfWeek(endOfMonth(cursor));
		return eachDayOfInterval({
			start,
			end
		});
	}, [cursor]);
	function commit(next) {
		setState((current) => {
			if (next.seeded && SEED_IDS.has(next.id)) return {
				...current,
				patches: {
					...current.patches,
					[next.id]: next
				}
			};
			const exists = current.custom.some((event) => event.id === next.id);
			return {
				...current,
				custom: exists ? current.custom.map((event) => event.id === next.id ? next : event) : [...current.custom, {
					...next,
					seeded: false
				}]
			};
		});
		setDraft(null);
		setCreating(false);
	}
	function remove(event) {
		setState((current) => {
			if (event.seeded && SEED_IDS.has(event.id)) {
				const patches = { ...current.patches };
				delete patches[event.id];
				return {
					...current,
					deleted: [...current.deleted, event.id],
					patches
				};
			}
			return {
				...current,
				custom: current.custom.filter((item) => item.id !== event.id)
			};
		});
		setDraft(null);
		setCreating(false);
	}
	function openNew(date) {
		setCreating(true);
		setDraft(freshEvent(format(date, "yyyy-MM-dd")));
		setTip(null);
	}
	const shown = (event) => state.lanes[event.lane];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "app",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mark",
						children: [
							"B",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "//" }),
							"OARD"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sub",
						children: "ADMISSION + COACHING"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "tools",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "nav-month",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "icon-btn",
									type: "button",
									"aria-label": "Previous month",
									onClick: () => setCursor((d) => addMonths(d, -1)),
									children: "‹"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "month-label",
									children: format(cursor, "MMM yyyy").toUpperCase()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "icon-btn",
									type: "button",
									"aria-label": "Next month",
									onClick: () => setCursor((d) => addMonths(d, 1)),
									children: "›"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "pill",
							type: "button",
							onClick: () => setCursor(startOfMonth(/* @__PURE__ */ new Date())),
							children: "TODAY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaneToggle, {
							lane: "uni",
							label: "UNI",
							state,
							setState
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaneToggle, {
							lane: "varsity",
							label: "VARSITY",
							state,
							setState
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaneToggle, {
							lane: "engg",
							label: "ENGG",
							state,
							setState
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "pill",
							type: "button",
							onClick: () => setState((current) => ({
								...current,
								theme: current.theme === "day" ? "night" : "day"
							})),
							children: state.theme === "day" ? "NIGHT" : "DAY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "pill add",
							type: "button",
							onClick: () => openNew(cursor),
							children: "ADD"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "board-scroll",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "board-inner",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "week",
						children: WEEK.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: day }, day))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid",
						children: days.map((day) => {
							const key = format(day, "yyyy-MM-dd");
							const mine = events.filter((event) => event.date === key && shown(event));
							const visible = mine.slice(0, MAX_CHIPS);
							const extra = mine.length - visible.length;
							const past = isBefore(day, today) && !isSameDay(day, today);
							const deadline = mine.some((event) => event.tone === "end" || event.tail === "END");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: [
									"day",
									isSameMonth(day, cursor) ? "" : "out",
									past ? "past" : "",
									deadline ? "deadline" : "",
									isSameDay(day, today) ? "today" : ""
								].join(" "),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "num",
									type: "button",
									onClick: () => openNew(day),
									children: format(day, "d")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "chips",
									children: [visible.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										event,
										onOpen: () => {
											setCreating(false);
											setDraft(event);
											setTip(null);
										},
										onHover: (x, y) => setTip({
											event,
											x,
											y
										}),
										onLeave: () => setTip(null)
									}, event.id)), extra > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "more",
										type: "button",
										onClick: () => openNew(day),
										children: [
											"+",
											extra,
											" MORE"
										]
									}) : null]
								})]
							}, key);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "legend",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "▲ END" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "■ EXAM" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "● START" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "◆ COACHING" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "HOVER A CHIP · TAP THE DATE TO ADD" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "pill",
						type: "button",
						onClick: () => setConfirmReset(true),
						children: "RESET"
					})
				]
			}),
			tip && tip.event.hoverHead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tip",
				style: {
					left: tip.x,
					top: tip.y
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: tip.event.hoverHead }),
					tip.event.hoverMarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: tip.event.hoverMarks }) : null,
					tip.event.hoverNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: tip.event.hoverNote }) : null
				]
			}) : null,
			draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Editor, {
				draft,
				creating,
				onChange: setDraft,
				onSave: () => commit(draft),
				onDelete: () => remove(draft),
				onClose: () => {
					setDraft(null);
					setCreating(false);
				}
			}) : null,
			confirmReset ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sheet-back",
				onClick: () => setConfirmReset(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "sheet",
					onClick: (event) => event.stopPropagation(),
					onSubmit: (event) => {
						event.preventDefault();
						setState((current) => ({
							...EMPTY_STATE,
							theme: current.theme
						}));
						setConfirmReset(false);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "WIPE THE BOARD?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hint",
							children: "Deletes your chips and restores the admission and coaching defaults."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "row-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "pill add",
								type: "submit",
								children: "RESET"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "pill",
								type: "button",
								onClick: () => setConfirmReset(false),
								children: "KEEP"
							})]
						})
					]
				})
			}) : null
		]
	});
}
var SEED_IDS = new Set(SEED.map((event) => event.id));
function LaneToggle({ lane, label, state, setState }) {
	const on = state.lanes[lane];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: `lane ${lane} ${on ? "on" : ""}`,
		type: "button",
		onClick: () => setState((current) => ({
			...current,
			lanes: {
				...current.lanes,
				[lane]: !current.lanes[lane]
			}
		})),
		children: label
	});
}
function Chip({ event, onOpen, onHover, onLeave }) {
	const custom = event.tone === "custom" ? {
		background: event.color || "#e10600",
		color: inkFor(event.color || "#e10600"),
		borderColor: inkFor(event.color || "#e10600")
	} : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: `chip tone-${event.tone}`,
		style: custom,
		onClick: onOpen,
		onMouseEnter: (hoverEvent) => {
			const box = hoverEvent.currentTarget.getBoundingClientRect();
			const left = Math.min(box.left, window.innerWidth - 300);
			const top = box.bottom + 8;
			onHover(Math.max(8, left), top + 72 > window.innerHeight ? box.top - 88 : top);
		},
		onMouseLeave: onLeave,
		onFocus: (hoverEvent) => {
			const box = hoverEvent.currentTarget.getBoundingClientRect();
			onHover(Math.max(8, box.left), box.bottom + 8);
		},
		onBlur: onLeave,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "chip-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: event.symbol }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: event.label })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "chip-tail",
			children: event.tail
		})]
	});
}
function Editor({ draft, creating, onChange, onSave, onDelete, onClose }) {
	function set(key, value) {
		onChange({
			...draft,
			[key]: value
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sheet-back",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "sheet",
			onClick: (event) => event.stopPropagation(),
			onSubmit: (event) => {
				event.preventDefault();
				if (!draft.label.trim() || !draft.date) return;
				onSave();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: creating ? "NEW CHIP" : "EDIT CHIP" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hint",
					children: "Color, symbol, and the hover card are yours. Hover stays to two lines unless you add a note."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "preview-chip",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						event: draft,
						onOpen: () => void 0,
						onHover: () => void 0,
						onLeave: () => void 0
					})
				}),
				draft.hoverHead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "tip",
					style: {
						position: "static",
						width: "100%",
						marginBottom: 14
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: draft.hoverHead }),
						draft.hoverMarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: draft.hoverMarks }) : null,
						draft.hoverNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: draft.hoverNote }) : null
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field",
					children: ["DATE", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						value: draft.date,
						onChange: (event) => set("date", event.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field",
					children: ["LABEL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draft.label,
						maxLength: 16,
						onChange: (event) => set("label", event.target.value.toUpperCase()),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field",
					children: ["TAIL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draft.tail,
						maxLength: 12,
						onChange: (event) => set("tail", event.target.value.toUpperCase())
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field",
					children: ["LANE", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: draft.lane,
						onChange: (event) => set("lane", event.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "uni",
								children: "UNIVERSITY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "varsity",
								children: "VARSITY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "engg",
								children: "ENGINEERING"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field",
					children: ["SYMBOL", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: draft.symbol,
						onChange: (event) => set("symbol", event.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "▲",
								children: "▲ END"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "■",
								children: "■ EXAM"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "●",
								children: "● START"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "◆",
								children: "◆ COACHING"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "field",
					children: ["COLOR", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "swatches",
						children: [TONE_CHOICES.map((tone) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `swatch tone-${tone.id} ${draft.tone === tone.id ? "on" : ""}`,
							style: tone.id === "custom" ? { background: draft.color || "#e10600" } : void 0,
							"aria-label": tone.label,
							onClick: () => set("tone", tone.id)
						}, tone.id)), draft.tone === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							"aria-label": "Custom color",
							type: "color",
							value: draft.color || "#e10600",
							onChange: (event) => set("color", event.target.value)
						}) : null]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field",
					children: ["HOVER HEADING", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draft.hoverHead,
						onChange: (event) => set("hoverHead", event.target.value.toUpperCase()),
						placeholder: "VARSITY"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field",
					children: ["NUMBER DISTRIBUTION", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 2,
						value: draft.hoverMarks,
						onChange: (event) => set("hoverMarks", event.target.value),
						placeholder: "MCQ 60×1=60 · Written 16×2.5=40"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field",
					children: ["EXTRA LINE", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draft.hoverNote,
						onChange: (event) => set("hoverNote", event.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row-actions",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "pill add",
							type: "submit",
							children: "SAVE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "pill",
							type: "button",
							onClick: onClose,
							children: "CLOSE"
						}),
						!creating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "pill",
							type: "button",
							onClick: onDelete,
							children: "DELETE"
						}) : null
					]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Board, {});
}
//#endregion
export { Home as component };
