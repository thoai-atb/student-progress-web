import { FaEye } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useBrowseContext } from "./browse.context";

export const BrowseTable = () => {
  const { students, searchParams, isLoading, pageSize } = useBrowseContext();
  const navigate = useNavigate();
  const path = useLocation().pathname;
  function handleSelectStudent(studentId) {
    navigate({
      pathname: `${path}/student/${studentId}`,
      search: `?progressCategory=${
        searchParams.get("progressCategory") || "general"
      }`,
    });
  }
  return (
    <div className="bg-white shadow-xl m-4 w-full">
      <table className="w-full table-styled">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Year</th>
            <th className="w-1/4">Status</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            students.map((item) => (
              <tr key={item.id} className="group relative">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>K{item.studentYear}</td>
                <td
                  className={(() => {
                    switch (item.status) {
                      case "Finished":
                        return "text-success-600";
                      case "Dropped":
                        return "text-error-500";
                      default:
                        return "";
                    }
                  })()}
                >
                  {item.status}
                </td>
                <td
                  className="absolute right-0 group-hover:opacity-100 opacity-0 cursor-pointer hover:text-primary-500 text-2xl"
                  onClick={() => handleSelectStudent(item.id)}
                >
                  <FaEye className="text-xl" />
                </td>
              </tr>
            ))}
          {!isLoading && students.length === 0 && (
            <tr className="tr-inactive">
              <td colSpan="4" className="text-center">
                (No results)
              </td>
            </tr>
          )}
          {isLoading &&
            Array(pageSize)
              .fill("DSF")
              .map((_, index) => (
                <tr className="tr-inactive" key={index}>
                  <td className="opacity-20">Loading...</td>
                  <td className="opacity-0">...</td>
                  <td className="opacity-0">...</td>
                  <td className="opacity-0">...</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};
