import { useState } from "react";
import { FaArrowLeft, FaSyncAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ButtonTransparent } from "../../../components/button-transparent";
import { ProgressCategorySelect } from "../input-components/progress-category-select";
import { ProgressIndicator } from "./progress-indicator";
import { ProgressStepDescription } from "./progress-step-description";
import { StudentDetailsProvider } from "./student-details.context";
import { StudentInfo } from "./student-info";

export const StudentDetails = () => {
  const navigate = useNavigate();
  const [reload, setReload] = useState(true);

  function handleMyBack() {
    navigate("/browse");
  }

  function handleRefresh() {
    setReload(true);
  }

  return (
    <StudentDetailsProvider reload={reload} setReload={setReload}>
      <div className="relative w-full h-full">
        <div className="flex items-center justify-between my-4 gap-4">
          <ButtonTransparent
            text="Back"
            className="w-15 my-4"
            onClick={handleMyBack}
            icon={<FaArrowLeft />}
          />
          <ButtonTransparent
            text="Refresh"
            className="w-15 my-4"
            onClick={handleRefresh}
            icon={<FaSyncAlt />}
          />
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <div className="text-background-800">Progress Category</div>
            <ProgressCategorySelect label={""} />
          </div>
        </div>
        <StudentInfo />
        <ProgressIndicator />
        <ProgressStepDescription />
      </div>
    </StudentDetailsProvider>
  );
};
