import { Button } from "../components/button";
import { TextInput } from "../components/text-input";
import mainLogo from "../assets/hcmiu-logo.png";
import { useNavigate } from "react-router-dom";

export const LoginPage = ({ onAuthentication }) => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    onAuthentication();
    navigate("/");
  };
  return (
    <div className="w-screen h-screen bg-background-50 flex items-center justify-center flex-col">
      <div className="flex items-center justify-center">
        <div
          className="bg-white shadow-xl flex justify-center items-center p-6 rounded flex-col"
          style={{ width: "25rem" }}
        >
          <div className="">
            <img src={mainLogo} alt="logo" className="w-32 h-32" />
          </div>
          <div className="text-background-700 text-2xl text-center my-4">
            STUDENT PROGRESS MANAGER
          </div>
          <div className="text-background-700 text-md my-4 text-center">
            A system for student learning progress management with event driven
            mediator pattern
          </div>
          <TextInput title="Username" className="my-2" />
          <TextInput title="Password" isPassword className="my-2" />
          <Button
            text="Sign In"
            className="my-4 w-full text-sm"
            fontSize="text-xl"
            onClick={handleSignIn}
          />
        </div>
      </div>
    </div>
  );
};
