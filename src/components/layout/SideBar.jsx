import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import { NavLink } from "react-router-dom";

const SideBar = ({ isSidebarOpen }) => {
  const menu = [
    ["Users", <ManageAccountsOutlinedIcon />, "user-management"],
    ["Onboarding", <PersonAddOutlinedIcon />, "onboarding"],
    ["Cost Explorer", <AttachMoneyOutlinedIcon />, "cost-explorer"],
    ["AWS Services", <MiscellaneousServicesOutlinedIcon />, "aws-services"],
  ];

  return (
    <div
      className={`
        h-full bg-white shadow-md flex flex-col
        transition-all duration-300 ease-in-out overflow-hidden 
        ${isSidebarOpen ? "w-48" : "w-auto "}
      `}
    >
      {menu.map(([label, icon, link], idx) => (
        <NavLink
          key={idx}
          to={`/dashboard/${link}`}
          className={({ isActive }) =>
            `flex items-center gap-3 py-3 px-3 cursor-pointer transition-all duration-300
             ${
               isActive
                 ? "bg-blue-100 text-blue-600 font-semibold"
                 : "hover:bg-blue-50"
             }`
          }
        >
          <div
            className="
              flex items-center gap-3 py-3 px-3 cursor-pointer
              transition-all duration-300
            "
          >
            <span className="text-xl">{icon}</span>

            <span
              className={`
                text-sm font-medium whitespace-nowrap transition-all duration-300
                ${
                  isSidebarOpen
                    ? "opacity-100"
                    : "opacity-0 w-0 overflow-hidden"
                }
              `}
            >
              {label}
            </span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
