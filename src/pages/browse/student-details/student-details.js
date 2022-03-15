import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ButtonSecondary } from "../../../components/button-secondary";
import { SelectCustom } from "../../../components/select-custom";
import { PROGRESS_OPTIONS } from "../browse-mock-data";
import { ProgressIndicator } from "./progress-indicator";
import { ProgressStepDescription } from "./progress-step-description";
import {
  StudentDetailsProvider
} from "./student-details.context";
import { StudentInfo } from "./student-info";

export const StudentDetails = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleMyBack() {
    navigate("/browse");
  }

  function handleProgressCategoryChange({ value }) {
    searchParams.set("progressCategory", value);
    setSearchParams(searchParams);
  }

  return (
    <StudentDetailsProvider>
      <div className="relative w-full h-full">
        <div className="flex items-center justify-between my-4">
          <ButtonSecondary
            text="Back to Browse"
            className="w-15 my-4"
            onClick={handleMyBack}
            icon={<FaArrowLeft />}
          />
          <div className="flex items-center gap-4">
            <div className="text-background-800">Progress Category</div>
            <SelectCustom
              onChange={handleProgressCategoryChange}
              value={PROGRESS_OPTIONS.find(
                (o) => o.value === searchParams.get("progressCategory")
              )}
              options={PROGRESS_OPTIONS}
            />
          </div>
        </div>
        <StudentInfo />
        <ProgressIndicator />
        <ProgressStepDescription />
      </div>
    </StudentDetailsProvider>
  );
};




