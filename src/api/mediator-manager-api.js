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
  getProgressCategories: () => {
    return axiosInstance.get("/api/progress-categories");
  },
  getStudentYears: () => {
    return axiosInstance.get("/api/student-years");
  },
  getStudentsData: (studentYear) => {
    return axiosInstance.get(`/api/students-data/${studentYear}`);
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
    if (progressCategoryId) params.progressCategoryId = progressCategoryId;
    if (studentYearId) params.studentYearId = studentYearId;
    if (statusId) params.statusId = statusId;
    if (studentId) params.studentId = studentId;
    if (studentName) params.studentName = studentName;
    if (page) params.page = page;
    if (size) params.size = size;
    return axiosInstance.get(`/api/browse/${progressCategoryId}`, {
      params,
    });
  },
  getStudentData: (studentId, progressCategoryId) => {
    return axiosInstance.get(`/api/browse/student/${studentId}`, {
      params: {
        progressCategoryId,
      },
    });
  },
  getProcessors: (progressCategoryId) => {
    return axiosInstance.get(`/api/processors/${progressCategoryId}`);
  },
};
