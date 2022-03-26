import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8090",
  timeout: 3000,

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const MediatorManagerAPI = {
  login: (username, password) => {
    return axiosInstance.post("/api/login", { username, password });
  },
  getProgressCategories: () => {
    return axiosInstance.get("/api/progress-categories");
  },
  getStudentYears: () => {
    return axiosInstance.get("/api/student-years");
  },
  getStudentDistributions: (studentYear) => {
    return axiosInstance.get(`/api/distributions/${studentYear}`);
  },
  getBrowseStudents: ({
    progressCategoryId,
    studentYearId,
    statusId,
    studentId,
    studentName,
    page,
    size,
  }) => {
    const params = {};
    if (studentYearId) params.studentYearId = studentYearId;
    if (statusId) params.statusId = statusId;
    if (studentId) params.studentId = studentId;
    if (studentName) params.studentName = studentName;
    if (page) params.page = page;
    if (size) params.size = size;
    return axiosInstance.get(`/api/students/${progressCategoryId}`, {
      params,
    });
  },
  getStudentData: (studentId, progressCategoryId) => {
    return axiosInstance.get(`/api/student/${studentId}/${progressCategoryId}`);
  },
  getProcessors: (progressCategoryId) => {
    return axiosInstance.get(`/api/processors/${progressCategoryId}`);
  },
};
