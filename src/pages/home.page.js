import { Nav } from "../components/nav";
import { Outlet } from "react-router-dom";

export const HomePage = ({ onSignOut }) => {
  return (
    <div className="w-screen h-screen flex flex-col bg-background-25" style={{ minWidth: 1200 }}>
      <Nav onSignOut={onSignOut} />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
