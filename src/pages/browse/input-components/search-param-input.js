import { useSearchParams } from "react-router-dom";
import { TextInput } from "../../../components/text-input";

export const SearchParamInput = ({ title, param }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleInputChange(e) {
    const { value } = e.target;
    if (!value) searchParams.delete(param);
    else searchParams.set(param, value);
    setSearchParams(searchParams);
  }

  return (
    <TextInput
      value={searchParams.get(param) || ""}
      onChange={handleInputChange}
      title={title}
      className="w-56"
      searchIcon
    />
  );
};
