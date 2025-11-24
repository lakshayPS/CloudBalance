import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import UserModal from "./UserModal";
import { columns, rows } from "./userData";

// const columns = [
//   { id: "firstName", label: "First Name", minWidth: 100 },
//   { id: "lastName", label: "Last Name", minWidth: 120 },
//   {
//     id: "email",
//     label: "Email",
//     minWidth: 170,
//     // align: "right",
//   },
//   {
//     id: "roles",
//     label: "Roles",
//     minWidth: 120,
//     // align: "right",
//   },
//   {
//     id: "lastLogin",
//     label: "Last Login",
//     minWidth: 80,
//   },
//   {
//     id: "action",
//     label: "Action",
//     minWidth: 50,
//   },
// ];

// function createData(firstName, lastName, email, roles, lastLogin, action) {
//   return { firstName, lastName, email, roles, lastLogin, action };
// }

// const rows = [
//   createData(
//     "Lakshay",
//     "Pratap",
//     "lakshay@gmail.com",
//     "Admin",
//     "23/11/2025",
//     <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />
//   ),
//   createData(
//     "Manish",
//     "Rawat",
//     "manish@gmail.com",
//     "Customer",
//     "23/11/2025",
//     <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />
//   ),
//   createData(
//     "Mohit",
//     "Bisht",
//     "mohit@gmail.com",
//     "Customer",
//     "21/11/2025",
//     <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />
//   ),
//   createData(
//     "Manoj",
//     "Jaiswal",
//     "manoj@gmail.com",
//     "Read Only",
//     "20/11/2025",
//     <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />
//   ),
//   createData(
//     "Shreyash",
//     "Srivastava",
//     "sheraysh@gmail.com",
//     "Read Only",
//     "21/11/2025",
//     <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />
//   ),
//   createData(
//     "Saddam",
//     "Hussain",
//     "saddam@gmail.com",
//     "Customer",
//     "21/11/2025",
//     <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />
//   ),
//   createData(
//     "Lalit",
//     "Kumar",
//     "lalit@gmail.com",
//     "Customer",
//     "21/11/2025",
//     <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />
//   ),
//   createData(
//     "Mike",
//     "-",
//     "mike@gmail.com",
//     "Read Only",
//     "21/11/2025",
//     <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />
//   ),
//   createData(
//     "Davis",
//     "-",
//     "davis@gmail.com",
//     "Customer",
//     "20/11/2025",
//     <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />
//   ),
// ];

export default function UserTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableRows, setTableRows] = useState(rows);

  const [mode, setMode] = useState("add");

  const openEditModal = (row) => {
    setSelectedRow(row);
    setMode("edit");
    setOpen(true);
  };

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", p: 1 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{
                    backgroundColor: "#e8f1ff",
                    color: "#3436b7",
                    fontWeight: "bold",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => (
                <TableRow hover tabIndex={-1} key={idx}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    // Action column (Edit Icon)
                    if (column.id === "action") {
                      return (
                        <TableCell key={column.id}>
                          <EditIcon
                            sx={{ color: "#3436b7", cursor: "pointer" }}
                            onClick={() => openEditModal(row)}
                          />
                        </TableCell>
                      );
                    }

                    // Other columns
                    return <TableCell key={column.id}>{value}</TableCell>;
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <UserModal
        open={open}
        handleClose={() => setOpen(false)}
        mode={mode}
        selectedRow={selectedRow}
        setTableRows={setTableRows}
        tableRows={tableRows}
      />
    </Paper>
  );
}
