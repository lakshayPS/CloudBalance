// import React, { useEffect, useState } from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import EditIcon from "@mui/icons-material/Edit";
// import UserModal from "./UserModal";
// import { columns } from "./userData";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUsers } from "../../../../actions";

// export default function UserTable() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const [open, setOpen] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [mode, setMode] = useState("add");

//   const users = useSelector((state) => state.modifyTable.users);

//   const openEditModal = (row) => {
//     setSelectedRow(row);
//     setMode("edit");
//     setOpen(true);
//   };

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   return (
//     <Paper sx={{ width: "100%", overflow: "hidden", p: 1 }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                   sx={{
//                     backgroundColor: "#e8f1ff",
//                     color: "#3436b7",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {users
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, idx) => (
//                 <TableRow hover key={idx}>
//                   {columns.map((column) => {
//                     const value = row[column.id];

//                     if (column.id === "action") {
//                       return (
//                         <TableCell key={column.id}>
//                           <EditIcon
//                             sx={{ color: "#3436b7", cursor: "pointer" }}
//                             onClick={() => openEditModal(row)}
//                           />
//                         </TableCell>
//                       );
//                     }

//                     return <TableCell key={column.id}>{value}</TableCell>;
//                   })}
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={users.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={(e, newPage) => setPage(newPage)}
//         onRowsPerPageChange={(e) => {
//           setRowsPerPage(+e.target.value);
//           setPage(0);
//         }}
//       />

//       <UserModal
//         open={open}
//         handleClose={() => setOpen(false)}
//         mode={mode}
//         selectedRow={selectedRow}
//       />
//     </Paper>
//   );
// }

import React, { useEffect, useState } from "react";
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
import { columns as allColumns } from "./userData";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../../actions";

export default function UserTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [mode, setMode] = useState("edit");

  const users = useSelector((state) => state.modifyTable.users);
  const role = useSelector((state) => state?.auth?.role);
  const dispatch = useDispatch();

  const isAdmin = role === "ROLE_ADMIN";

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const openEditModal = (row) => {
    if (!isAdmin) return; // 🔐 extra safety
    setSelectedRow(row);
    setMode("edit");
    setOpen(true);
  };

  // ✅ Hide action column completely for non-admins
  const columns = isAdmin
    ? allColumns
    : allColumns.filter((col) => col.id !== "action");

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", p: 1 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    minWidth: column.minWidth,
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
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => (
                <TableRow hover key={idx}>
                  {columns.map((column) => {
                    const value = row[column.id];

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

                    return (
                      <TableCell key={column.id}>{value ?? "-"}</TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(+e.target.value);
          setPage(0);
        }}
      />

      {/* ✅ Modal (admin only can open) */}
      <UserModal
        open={open}
        handleClose={() => setOpen(false)}
        mode={mode}
        selectedRow={selectedRow}
      />
    </Paper>
  );
}
