import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = ({ isSidebarOpen }) => {
  const role = useSelector((state) => state?.auth?.role);

  const menu = [
    {
      label: "Users",
      icon: <ManageAccountsOutlinedIcon />,
      link: "user-management",
      roles: ["ROLE_ADMIN", "ROLE_READONLY"],
    },
    {
      label: "Onboarding",
      icon: <PersonAddOutlinedIcon />,
      link: "onboarding",
      roles: ["ROLE_ADMIN", "ROLE_READONLY"],
    },
    {
      label: "Cost Explorer",
      icon: <AttachMoneyOutlinedIcon />,
      link: "cost-explorer",
      roles: ["ROLE_ADMIN", "ROLE_CUSTOMER", "ROLE_READONLY"],
    },
    {
      label: "AWS Services",
      icon: <MiscellaneousServicesOutlinedIcon />,
      link: "aws-services",
      roles: ["ROLE_ADMIN", "ROLE_CUSTOMER", "ROLE_READONLY"],
    },
  ];

  const filteredMenu = menu.filter((item) => item.roles.includes(role));

  return (
    <div
      className={`
        h-full bg-white shadow-md flex flex-col
        transition-all duration-300 ease-in-out overflow-hidden 
        ${isSidebarOpen ? "w-48" : "w-auto"}
      `}
    >
      {filteredMenu.map(({ label, icon, link }, idx) => (
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
          <span className="text-xl">{icon}</span>

          <span
            className={`
              text-sm font-medium whitespace-nowrap transition-all duration-300
              ${isSidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}
            `}
          >
            {label}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
