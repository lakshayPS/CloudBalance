import React, { useState } from "react";
import CloudKeeper from "../../assets/CloudKeeper.png";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("Lens");
  const navigate = useNavigate();
  const menu = ["Lens", "Tuner", "CK-All"];
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value) => {
    setSelectedMenu(value);
    setAnchorEl(null);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center w-screen shadow-xl z-10">
      <div className="w-1/5 h-20 flex items-center justify-evenly ">
        <div className="w-1/2">
          <img src={CloudKeeper} alt="image error occured" />
        </div>
        <div className="flex items-center justify-evenly w-1/3">
          <MenuIcon
            color="info"
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
          <div className="flex items-center flex-col justify-center">
            <p className="font-bold">Module</p>
            <div className="flex items-center justify-center">
              <p>{selectedMenu}</p>
              <ArrowDropDownIcon
                className="cursor-pointer"
                onClick={handleOpen}
              />
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {menu.map((item, index) => (
                  <MenuItem id={index} onClick={() => handleSelect(item)}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-around">
        <div className="flex items-center w-1/2 justify-between">
          <AccountCircleOutlinedIcon
            color="info"
            fontSize="large"
            className="cursor-pointer"
          />
          <div>
            <p>Welcome,</p>
            <p className="text-blue-600 font-bold flex items-center">
              Lakshay Pratap Singh{" "}
              <InfoOutlinedIcon className="cursor-pointer" />
            </p>
          </div>
        </div>
        <p className="text-5xl text-gray-100 cursor-default">|</p>
        <div
          className="h-1/2 flex items-center justify-center w-1/4 border-2 rounded border-blue-500 py-2 cursor-pointer"
          onClick={handleLogout}
        >
          <LogoutRoundedIcon color="info" />{" "}
          <p className="text-blue-500 font-bold">Logout</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
