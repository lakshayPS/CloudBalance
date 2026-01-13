import { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccountsByEmail, fetchAllAccounts } from "../../actions";

const MainContent = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  const email = useSelector((state) => state.auth.email);

  useEffect(() => {
    if (!role) return;

    if (role === "ROLE_CUSTOMER") {
      dispatch(fetchAccountsByEmail(email));
    } else {
      dispatch(fetchAllAccounts());
    }
  }, [role, email, dispatch]);

  return (
    <div className="flex flex-col h-screen">
      <Header
        onLogout={onLogout}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      <div className="flex flex-1 overflow-hidden">
        <aside className="h-full">
          <SideBar isSidebarOpen={isSidebarOpen} />
        </aside>

        <main className="flex-1 overflow-y-auto p-4 bg-neutral-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainContent;
