import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UserManagement from "../UserManagement";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UserModal({ open, handleClose, mode, selectedRow }) {
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" fontWeight="bold" className="mb-4">
            {mode === "edit" ? "Edit User" : "Add User"}
          </Typography>

          <UserManagement
            selectedRow={selectedRow}
            mode={mode}
            open={open}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </div>
  );
}
