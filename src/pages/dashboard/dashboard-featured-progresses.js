import { useEffect, useState } from "react";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaRegSquare,
  FaRegCheckSquare,
  FaTimesCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { ButtonSecondary } from "../../components/button-secondary";
import { useDashboardContext } from "./dashboard.context";
import { useDisplayStudentsData } from "./use-display-students-data";

export const DashboardFeaturedProgresses = () => {
  const navigate = useNavigate();
  const {
    progressCategories,
    featuredProgresses,
    setFeaturedProgressIds,
    studentDistributions,
  } = useDashboardContext();
  const [newFeaturedProgresses, setNewFeaturedProgresses] = useState([]);

  const displayStudentsData = useDisplayStudentsData(
    progressCategories,
    studentDistributions
  );

  function handleCancel() {
    navigate("/dashboard");
  }

  function handleSave() {
    setFeaturedProgressIds(
      newFeaturedProgresses.map((progress) => progress.id)
    );
    navigate("/dashboard");
  }

  function moveUp(index) {
    if (index === 0) return;
    moveDown(index - 1);
  }

  function moveDown(index) {
    if (index === newFeaturedProgresses.length - 1) return;
    const newFeaturedProgressesCopy = [...newFeaturedProgresses];
    newFeaturedProgressesCopy[index] = newFeaturedProgressesCopy[index + 1];
    newFeaturedProgressesCopy[index + 1] = newFeaturedProgresses[index];
    setNewFeaturedProgresses(newFeaturedProgressesCopy);
  }

  function handleSelect(categoryId) {
    const existed = newFeaturedProgresses.find(
      (progress) => progress.id === categoryId
    );
    if (existed) {
      const newFeaturedProgressesCopy = newFeaturedProgresses.filter(
        (p) => p.id !== categoryId
      );
      setNewFeaturedProgresses(newFeaturedProgressesCopy);
      return;
    }
    const progress = progressCategories.find(
      (progress) => progress.id === categoryId
    );
    const newFeaturedProgressesCopy = [...newFeaturedProgresses, progress];
    setNewFeaturedProgresses(newFeaturedProgressesCopy);
  }

  useEffect(() => {
    setNewFeaturedProgresses(featuredProgresses);
  }, [featuredProgresses]);

  return (
    <div className="relative flex-1 h-full flex flex-col items-center">
      <div className="absolute inset-0 overflow-auto scrollbar-styled p-10 flex items-center flex-col">
        <div className="text-2xl text-background-900 flex items-center w-full">
          <div>Edit featured progresses</div>
          <div className="flex-1" />
          <ButtonSecondary
            text={"Cancel"}
            onClick={handleCancel}
            className="mx-2 w-20"
          />
          <Button text={"Save"} onClick={handleSave} className="mx-2 w-20" />
        </div>
        <div className="w-full" style={{ maxWidth: 1200 }}>
          <div className="text-background-700 my-8">Featured progresses</div>
          <div className="flex w-full flex-col items-center">
            {newFeaturedProgresses.map((category, index) => {
              return (
                <div
                  key={category.id}
                  className="flex w-full items-center bg-white p-2 rounded my-1 shadow-sm px-4 trasition-all duration-100 hover:bg-primary-50"
                >
                  <div className="">{category.name} progress</div>
                  <div className="flex-1" />
                  <DataColor
                    data={displayStudentsData.find(
                      (data) => data.category.id === category.id
                    )}
                  />
                  <CircleButton onClick={() => moveUp(index)}>
                    <FaArrowAltCircleUp />
                  </CircleButton>
                  <CircleButton onClick={() => moveDown(index)}>
                    <FaArrowAltCircleDown />
                  </CircleButton>
                  <CircleButton
                    onClick={() => handleSelect(category.id)}
                    hoverTextClass="hover:text-error-500"
                  >
                    <FaTimesCircle />
                  </CircleButton>
                </div>
              );
            })}
          </div>
          <hr className="my-8"></hr>
          <div className="text-background-700 my-8">All progresses</div>
          <div className="flex w-full flex-col items-center">
            {progressCategories.map((category) => {
              return (
                <SelectProgressRow
                  key={category.id}
                  name={category.name}
                  dataColor={
                    <DataColor
                      data={displayStudentsData.find(
                        (data) => data.category.id === category.id
                      )}
                    />
                  }
                  selected={
                    !!newFeaturedProgresses.find((c) => c.id === category.id)
                  }
                  onSelect={() => handleSelect(category.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const DataColor = ({ data }) => {
  const inProgress = data.inProgress / data.total;
  const finished = data.finished / data.total;
  const dropped = data.dropped / data.total;
  return (
    <div className="w-1/2 flex items-center justify-center mx-8 rounded-full overflow-hidden">
      <div
        className="bg-primary-500 h-2 duration-500"
        style={{ width: `${inProgress * 100}%` }}
      />
      <div
        className="bg-success-500 h-2 duration-500"
        style={{ width: `${finished * 100}%` }}
      />
      <div
        className="bg-error-500 h-2 duration-500"
        style={{ width: `${dropped * 100}%` }}
      />
    </div>
  );
};

const CircleButton = ({
  children,
  hoverTextClass = "hover:text-primary-500",
  ...props
}) => {
  return (
    <div
      className={`px-2 text-background-200 ${hoverTextClass} cursor-pointer`}
      {...props}
    >
      {children}
    </div>
  );
};

const SelectProgressRow = ({ name, selected, onSelect, dataColor }) => {
  return (
    <div
      className={
        "flex w-full items-center px-4 p-2  rounded my-1 shadow-sm cursor-pointer border border-transparent hover:bg-primary-50" +
        (selected
          ? " bg-primary-50 text-primary-500"
          : " bg-white text-background-900")
      }
      onClick={onSelect}
    >
      <div className="flex-1 text-background-900">{name} progress</div>
      <div className="flex-1" />
      {dataColor}
      <div className="px-2">
        {selected ? <FaRegCheckSquare /> : <FaRegSquare />}
      </div>
    </div>
  );
};
