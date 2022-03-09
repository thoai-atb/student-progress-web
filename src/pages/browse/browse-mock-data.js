export const STUDENT_YEAR_OPTIONS = [
  { value: "all", label: "All" },
  { value: "22", label: "k22" },
  { value: "21", label: "k21" },
  { value: "20", label: "k20" },
  { value: "19", label: "k19" },
  { value: "18", label: "k18" },
  { value: "17", label: "k17" },
  { value: "16", label: "k16" },
  { value: "15", label: "k15" },
  { value: "14", label: "k14" },
];

export const PROGRESS_OPTIONS = [
  { value: "general", label: "General" },
  { value: "semesterii2022", label: "Semester II 2022" },
];

export const STEP_OPTIONS = [
  { value: "all", label: "All" },
  { value: "in_progress", label: "In Progress" },
  { value: "finished", label: "Finished" },
  { value: "dropped", label: "Dropped" },
];

export const GENERAL_STEPS = [
  {
    name: "Application",
    status: "done",
  },
  {
    name: "Entry English",
    status: "done",
  },
  {
    name: "Academic English",
    status: "done",
  },
  {
    name: "Credits",
    status: "done",
  },
  {
    name: "Thesis",
    status: "pending",
  },
  {
    name: "Certificates",
    status: "pending",
  },
  {
    name: "Finished",
    status: "pending",
    isFinished: true,
  },
  {
    name: "Dropped",
    status: "pending",
    isError: true,
  },
];
