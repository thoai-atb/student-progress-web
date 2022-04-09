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

  /* DATA FORMAT:
    [
      {
        "id": "general",
        "name": "General",
        "description": "...",
        "steps": [
          {
            "id": "application",
            "name": "Application",
            "description": "...",
          }
        ]
      }
    ]
  */
  getProgressCategories: () => {
    return axiosInstance.get("/api/progress-categories");
  },

  /* DATA FORMAT:
    [
      {
        "id": "22",
      }
    ]
  */
  getStudentYears: () => {
    return axiosInstance.get("/api/student-years");
  },

  /* DATA FORMAT:
    [
      {
        "progressCategoryId": "general",
        "studentYearId": "22",
        "data": [
          {
            "id": "application",
            "name": "Application",
            "students": 656,
          }
        ]
      }
    ]
  */
  getStudentDistributions: (studentYear) => {
    return axiosInstance.get(`/api/distributions/${studentYear}`);
  },

  /* DATA FORMAT:
    {
      "total": 120,
      "data": [
        {
          "id": "ITITIU17001",
          "name": "Nguyen Van A1",
          "studentYear": 17,
          "status": "Certificates"
        }
      ]
    }
  */
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

  /* DATA FORMAT:
    {
      "id": "ITITIU17001",
      "name": "Nguyen Van A1",
      "studentYear": 17,
      "status": "Certificates",
      "progressStatus": {
        "id": "general",
        "name": "General",
        "step": {
          "id": "certificates",
          "name": "Certificates",
        },
        "progressData": [
          {
            "id": "application",
            "name": "Application",
            "status": "done",
            "statusName": "Done",
            "description": "... same as step description"
            "progress": 100,
            "items": [
              {
                "label": "Condition 1",
                "description": "...",
                "status": "done/not done",
              }
            ]
          }
        ]
      }
    }
  */
  getStudentData: (studentId, progressCategoryId) => {
    return axiosInstance.get(`/api/student/${studentId}/${progressCategoryId}`);
  },
  getProcessors: (progressCategoryId) => {
    return axiosInstance.get(`/api/processors/${progressCategoryId}`);
  },
};
