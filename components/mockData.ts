export const patients = [
  { id: "001-KR-SE", name: "김철수", status: "Active", site: "KR-01", progress: 72 },
  { id: "002-KR-SE", name: "이영희", status: "Screening", site: "KR-01", progress: 25 },
  { id: "003-KR-SE", name: "박민수", status: "Active", site: "KR-02", progress: 46 },
];

export const saes = [
  { id: "SAE-2023-005", title: "Anaphylactic Shock", severity: "Severe", status: "미제출" },
  { id: "SAE-2023-004", title: "Severe Headache", severity: "Mild", status: "제출 완료" },
];

export const queries = [
  { id: "Q-4592", status: "Open", priority: "High", module: "Vital Signs" },
  { id: "Q-4591", status: "Resolved", priority: "Medium", module: "Adverse Events" },
];

export const users = [
  { id: "U-001", name: "김철수", role: "Investigator", status: "Active" },
  { id: "U-002", name: "이영희", role: "Coordinator", status: "Suspended" },
];

export const templates = [
  { id: "tmpl-001", name: "Baseline Visit", updated: "2024-02-10" },
  { id: "tmpl-002", name: "Vital Signs", updated: "2024-02-18" },
];
