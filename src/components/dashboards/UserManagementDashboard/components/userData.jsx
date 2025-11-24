// import EditIcon from "@mui/icons-material/Edit";

// function createData(firstName, lastName, email, roles, lastLogin, action) {
//   return { firstName, lastName, email, roles, lastLogin, action };
// }

// export const columns = [
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

// export const rows = [
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
import EditIcon from "@mui/icons-material/Edit";

// 1. COLUMNS
export const columns = [
  { id: "firstName", label: "First Name", minWidth: 100 },
  { id: "lastName", label: "Last Name", minWidth: 120 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "roles", label: "Roles", minWidth: 120 },
  { id: "lastLogin", label: "Last Login", minWidth: 80 },
  { id: "action", label: "Action", minWidth: 50 },
];

// 2. UTILITY TO CREATE A ROW
function createData(firstName, lastName, email, roles, lastLogin) {
  return {
    firstName,
    lastName,
    email,
    roles,
    lastLogin,
    action: <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />,
  };
}

// 3. ROWS
export const rows = [
  createData("Lakshay", "Pratap", "lakshay@gmail.com", "Admin", "23/11/2025"),
  createData("Manish", "Rawat", "manish@gmail.com", "Customer", "23/11/2025"),
  createData("Mohit", "Bisht", "mohit@gmail.com", "Customer", "21/11/2025"),
  createData("Manoj", "Jaiswal", "manoj@gmail.com", "Read Only", "20/11/2025"),
  createData(
    "Shreyash",
    "Srivastava",
    "sheraysh@gmail.com",
    "Read Only",
    "21/11/2025"
  ),
  createData("Saddam", "Hussain", "saddam@gmail.com", "Customer", "21/11/2025"),
  createData("Lalit", "Kumar", "lalit@gmail.com", "Customer", "21/11/2025"),
  createData("Mike", "-", "mike@gmail.com", "Read Only", "21/11/2025"),
  createData("Davis", "-", "davis@gmail.com", "Customer", "20/11/2025"),
];
