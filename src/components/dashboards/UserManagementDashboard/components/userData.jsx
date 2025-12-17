import EditIcon from "@mui/icons-material/Edit";

function createData(firstName, lastName, email, role, lastLogin) {
  return {
    firstName,
    lastName,
    email,
    role,
    lastLogin,
    action: <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />,
  };
}

export const columns = [
  { id: "firstName", label: "First Name", minWidth: 100 },
  { id: "lastName", label: "Last Name", minWidth: 120 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "role", label: "Role", minWidth: 120 },
  { id: "action", label: "Action", minWidth: 50 },
];

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
