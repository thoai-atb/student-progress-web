export const STUDENT_YEAR_OPTIONS = [
  { value: "all", label: "All" },
  { value: "22", label: "K22" },
  { value: "21", label: "K21" },
  { value: "20", label: "K20" },
  { value: "19", label: "K19" },
  { value: "18", label: "K18" },
  { value: "17", label: "K17" },
];

export const PROGRESS_OPTIONS = [
  { value: "general", label: "General" },
  { value: "semester", label: "Semester II 2022" },
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
