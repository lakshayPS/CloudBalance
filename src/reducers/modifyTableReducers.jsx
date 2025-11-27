import EditIcon from "@mui/icons-material/Edit";
const initialState = {
  users: [
    {
      id: 1,
      firstName: "Lakshay",
      lastName: "Pratap",
      email: "lakshay@gmail.com",
      roles: "Admin",
      lastLogin: "23/11/2025",
      action: <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />,
    },
    {
      id: 2,
      firstName: "Manish",
      lastName: "Rawat",
      email: "manish@gmail.com",
      roles: "Customer",
      lastLogin: "23/11/2025",
      action: <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />,
    },
    {
      id: 3,
      firstName: "Manoj",
      lastName: "Jaiswal",
      email: "manoj@gmail.com",
      roles: "Customer",
      lastLogin: "20/11/2025",
      action: <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />,
    },
    {
      id: 4,
      firstName: "Mohit",
      lastName: "Bisht",
      email: "mohit@gmail.com",
      roles: "Read Only",
      lastLogin: "21/11/2025",
      action: <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />,
    },
    {
      id: 5,
      firstName: "Shreyash",
      lastName: "Srivastava",
      email: "sheraysh@gmail.com",
      roles: "Read Only",
      lastLogin: "21/11/2025",
      action: <EditIcon sx={{ color: "#3436b7", cursor: "pointer" }} />,
    },
  ],
};

export const modifyTable = (state = initialState, action) => {
  switch (action.type) {
    case "addUser": {
      const newUser = action.payload;

      const alreadyExists = state.users.some(
        (u) => u.email.toLowerCase() == newUser.email.toLowerCase()
      );

      if (alreadyExists) {
        alert("user with this email already exists");
        return state;
      }

      return {
        ...state,
        users: [...state.users, newUser],
      };
    }

    case "updateUser": {
      const updated = action.payload;

      return {
        ...state,
        users: state.users.map((u) =>
          u.id === updated.id ? { ...u, ...updated } : u
        ),
      };
    }

    default:
      return state;
  }
};
