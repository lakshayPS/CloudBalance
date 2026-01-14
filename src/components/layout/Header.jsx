import { useEffect, useState } from "react";
import CloudKeeper from "../../assets/CloudKeeper.png";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../../store";

const Header = ({ toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const userName = useSelector((state) => state?.auth?.userName);
  const accountsFromStore = useSelector((state) => state?.accounts?.list ?? []);

  const selectedAccount = useSelector(
    (state) => state?.accounts?.selectedAccount
  );

  useEffect(() => {
    if (!selectedAccount && accountsFromStore.length > 0) {
      dispatch({
        type: "SET_SELECTED_ACCOUNT",
        payload: accountsFromStore[0],
      });
    }
  }, [accountsFromStore, selectedAccount, dispatch]);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (account) => {
    dispatch({
      type: "SET_SELECTED_ACCOUNT",
      payload: account,
    });

    setAnchorEl(null);
  };

  const handleLogout = async () => {
    dispatch({ type: "LOGOUT" });
    await persistor.purge();
    navigate("/", { replace: true });
  };

  return (
    <header className="flex justify-between items-center w-screen shadow-xl z-10">
      <div className="w-1/5 h-20 flex items-center justify-around">
        <div className="w-1/3">
          <img src={CloudKeeper} alt="CloudKeeper logo" />
        </div>

        <div className="flex items-center gap-4 w-1/2">
          <MenuIcon
            color="info"
            className="cursor-pointer flex-shrink-0"
            onClick={toggleSidebar}
          />

          <div className="flex items-center gap-2 max-w-[220px]">
            <p className="font-bold flex-shrink-0">Module</p>

            <div className="flex items-center gap-1 min-w-0">
              <p
                className="max-w-[160px] truncate whitespace-nowrap overflow-hidden"
                title={selectedAccount?.accName}
              >
                {selectedAccount?.accName || "Select Account"}
              </p>

              <ArrowDropDownIcon
                className="cursor-pointer flex-shrink-0"
                onClick={handleOpen}
              />

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxWidth: 260,
                    maxHeight: 300,
                  },
                }}
              >
                {accountsFromStore.map((acc) => (
                  <MenuItem
                    key={acc.accId}
                    onClick={() => handleSelect(acc)}
                    title={acc.accName}
                  >
                    <span className="block max-w-[230px] truncate">
                      {acc.accName}
                    </span>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/4 flex items-center justify-around">
        <div className="flex items-center w-auto justify-between">
          <AccountCircleOutlinedIcon
            color="info"
            fontSize="large"
            className="cursor-pointer mx-3"
          />

          <div>
            <p>Welcome,</p>

            <p
              title={userName}
              className="text-blue-600 font-bold flex items-center gap-1"
            >
              {userName || "Loading..."}
            </p>
          </div>
        </div>

        <p className="text-5xl text-gray-100 cursor-default">|</p>

        <div
          className="h-1/2 flex items-center justify-center w-1/4 border-2 rounded border-blue-500 py-2 cursor-pointer"
          onClick={handleLogout}
        >
          <LogoutRoundedIcon color="info" />
          <p className="text-blue-500 font-bold ml-1">Logout</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
