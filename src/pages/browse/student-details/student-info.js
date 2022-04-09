import { WhiteCard } from "../../../components/white-card";
import { useStudentDetailsContext } from "./student-details.context";

export const StudentInfo = () => {
  const { studentData } = useStudentDetailsContext();
  if (!studentData) return null;
  return (
    <WhiteCard className="mb-8">
      <div className="text-background-700 font-bold mb-4">Student Info</div>
      <div className="px-4 flex gap-8">
        <div>
          <InfoField label="ID" value={studentData.id} />
          <InfoField label="Name" value={studentData.name} />
        </div>
        <div>
          <InfoField
            label="Student Year"
            value={`K${studentData.studentYear}`}
          />
          <InfoField label="Current Progress" value={`${studentData.status}`} />
        </div>
      </div>
    </WhiteCard>
  );
};

const InfoField = ({ label, value }) => {
  return (
    <div className="text-background-900 my-2">
      <span className="font-bold mr-2">{label}:</span>
      <span className="">{value}</span>
    </div>
  );
};
