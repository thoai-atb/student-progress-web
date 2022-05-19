import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MediatorManagerAPI } from "../apis/mediator-manager-api";
import mainLogo from "../assets/hcmiu-logo.png";
import { Button } from "../components/button";
import { TextInput } from "../components/text-input";

export const LoginPage = ({ onAuthentication }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSignIn() {
    const loginAsync = async () => {
      if (loading) return;
      if (!username || !password) {
        alert("Please enter username and password");
        return;
      }
      try {
        setLoading(true);
        const res = await MediatorManagerAPI.login(username, password);
        if (!res.data.success) {
          alert("Invalid username or password");
          return;
        }
        onAuthentication();
        navigate("/");
      } catch (err) {
        alert("Can't connect to server");
      } finally {
        setLoading(false);
      }
    };
    loginAsync();
  }

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
          <TextInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            title="Username"
            className="my-2"
          />
          <TextInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            title="Password"
            isPassword
            className="my-2"
          />
          <Button
            text="Sign In"
            className={"my-4 w-full text-sm" + (loading ? " opacity-50" : "")}
            disabled={loading}
            fontSize="text-xl"
            onClick={handleSignIn}
          />
        </div>
      </div>
    </div>
  );
};
