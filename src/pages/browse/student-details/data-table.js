const mockData = [
  {
    name: "IE 1",
    value: "Done",
  },
  {
    name: "IE 2",
    value: "Done",
  },
  {
    name: "IE 3",
    value: "Done",
  },
  {
    name: "IE 4",
    value: "Done",
  },
  {
    name: "IE 5",
    value: "Done",
  },
];

export const DataTable = ({ title = "English Progress", data = mockData }) => {
  return (
    <div className="p-4 text-background-900">
      <div className="mb-4">{title}</div>
      <table className="border border-background-900">
        <tbody>
          {Object.keys(data).map((key) => (
            <tr key={key}>
              <Td>{key}</Td>
              <Td>{data[key]}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// eslint-disable-next-line no-unused-vars
const Th = ({ children }) => {
  return <th className="px-4 py-2 text-background-700">{children}</th>;
};

const Td = ({ children }) => {
  return <td className="px-4 py-2 border border-background-900">{children}</td>;
};
