import { FaEye } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const data = [
  {
    id: "ITITIU001",
    name: "John Lennon",
    year: "18",
    status: "Application",
  },
  {
    id: "ITITIU002",
    name: "George Harrison",
    year: "18",
    status: "Thesis",
  },
  {
    id: "ITITIU003",
    name: "Ringo Starr",
    year: "18",
    status: "Dropped",
  },
  {
    id: "ITITIU004",
    name: "Paul McCartney",
    year: "18",
    status: "Finished",
  },
  {
    id: "ITITIU005",
    name: "Pete Best",
    year: "19",
    status: "Application",
  },
  {
    id: "ITITIU006",
    name: "Mike Rutherford",
    year: "19",
    status: "Intensive English",
  },
  {
    id: "ITITIU007",
    name: "Joan Sutherland",
    year: "19",
    status: "Intensive English",
  },
  {
    id: "ITITIU008",
    name: "Oscar Peterson",
    year: "19",
    status: "Intensive English",
  },
];

export const BrowseTable = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  function handleSelectStudent() {
    navigate(`${path}/student`);
  }
  return (
    <div className="bg-white shadow-xl m-4 w-full rounded">
      <table className="w-full table-styled">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Year</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="group relative">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>K{item.year}</td>
              <td>{item.status}</td>
              <td
                className="absolute right-0 group-hover:opacity-100 opacity-0 cursor-pointer hover:text-primary-500 text-2xl"
                onClick={handleSelectStudent}
              >
                <FaEye />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
