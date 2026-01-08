import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import UserTable from "./UserManagementDashboard/components/UserTable";
import UserModal from "./UserManagementDashboard/components/UserModal";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const role = useSelector((state) => state?.auth?.role);
  const isAdmin = role === "ROLE_ADMIN";

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="p-4">
      {isAdmin && (
        <>
          <button
            onClick={handleOpen}
            className="bg-blue-600 text-white py-2 px-4 my-2 rounded-md 
                       font-semibold hover:bg-blue-700 flex items-center gap-2"
          >
            <AddIcon />
            <span>Add New User</span>
          </button>

          <UserModal open={isOpen} handleClose={handleClose} />
        </>
      )}

      <UserTable />
    </div>
  );
};

export default Dashboard;
