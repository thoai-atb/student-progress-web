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
    return axiosInstance.get(`/api/students/${progressCategoryId}`, {
      params: {
        studentYear: studentYearId,
        status: statusId,
        studentId,
        studentName,
        page,
        size,
      },
    });
  },
  getStudentData: (studentId, progressCategoryId) => {
    return axiosInstance.get(`/api/student/${studentId}/${progressCategoryId}`);
  },
  getProcessors: (progressCategoryId) => {
    return axiosInstance.get(`/api/processors/${progressCategoryId}`);
  },
};
