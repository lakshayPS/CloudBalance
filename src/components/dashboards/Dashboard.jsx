import React, { useState } from "react";
import UserManagement from "./UserManagementDashboard/UserManagement";
import AddIcon from "@mui/icons-material/Add";
import UserTable from "./UserManagementDashboard/components/UserTable";
import AWSServices from "./AWSServicesDashboard/AWSServices";
import ServicesProvider from "./AWSServicesDashboard/context/ServicesProvider";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="">
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white py-2 my-2 rounded-md font-semibold hover:bg-blue-700 flex w-1/10 justify-center cursor-pointer disabled"
        >
          <AddIcon /> <p>Add New User</p>
        </button>
        {isOpen ? <UserManagement /> : ""}

        <UserTable />
      </div>
    </>
  );
};

export default Dashboard;
