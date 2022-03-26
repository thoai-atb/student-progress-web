import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/hcmiu-logo.png";
import { routeMatcher } from "../utils/route-matcher";
import { FaUserAlt } from "react-icons/fa";

export const Nav = ({ onSignOut }) => {
  const navigate = useNavigate();
  function handleSignOut() {
    onSignOut();
    navigate("/login");
  }
  return (
    <div className="w-full bg-background-100 h-20 flex items-center px-4 text-background-800 gap-4">
      <img
        src={logo}
        alt="logo"
        className="w-14 h-14 rounded-full border-2 border-white"
      />
      <div className="text-xl truncate">STUDENT PROGRESS MANAGER</div>
      <div className="flex-1 h-full flex justify-center truncate">
        <NavItem title="Dashboard" path="dashboard" />
        <NavItem title="Browse" path="browse" />
        <NavItem title="Processors" path="processors" />
        <NavItem title="Problems" path="problems" />
      </div>
      <div>Admin</div>
      <div
        className="bg-background-25 rounded-full w-14 h-14 truncate cursor-pointer hover:bg-background-600 flex items-center justify-center"
        title="Sign Out"
        onClick={handleSignOut}
      >
        <FaUserAlt />
      </div>
    </div>
  );
};

const NavItem = ({ title, path }) => {
  const currentPath = useLocation().pathname;
  const result = routeMatcher(currentPath, path);
  const active = result.match;
  return (
    <Link
      className={
        "text-xl font-thin w-52 uppercase truncate px-8 h-full flex items-center justify-center" +
        (active ? " bg-background-25 text-primary-600" : " bg-background-100")
      }
      to={path}
    >
      {title}
    </Link>
  );
};
