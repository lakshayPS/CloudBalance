import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../../../actions";

const UserManagement = ({ mode, selectedRow, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (mode === "edit" && selectedRow) {
      editSetter(selectedRow);
    } else {
      resetForm();
    }
  }, [mode, selectedRow]);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setRole("");
    setPassword("");
  };

  const users = useSelector((state) => state.modifyTable.users);

  const dispatch = useDispatch();

  const editSetter = (selectedRow) => {
    setFirstName(selectedRow.firstName);
    setLastName(selectedRow.lastName);
    setEmail(selectedRow.email);
    setRole(selectedRow.role);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const exists = users.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (exists) {
      alert("User with this email already exists!");
      return;
    }

    const newUser = {
      id: users.length + 1,
      firstName,
      lastName,
      email,
      role,
      password,
    };

    console.log(newUser);

    dispatch(addUser(newUser));

    handleClose();
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedUser = {
      id: selectedRow.id,
      firstName,
      lastName,
      email,
      role,
    };

    dispatch(updateUser(updatedUser));
    handleClose();
  };

  return (
    <div className="w-auto bg-white my-3 shadow-2xs rounded-xs">
      <div className="flex">
        <div className="w-1/2 mb-4 p-4">
          <label className="flex items-center mb-1">
            First Name <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="w-1/2 mb-4 p-4">
          <label className="flex items-center mb-1">
            Last Name <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex">
        {/* <div className={`w-1/2 mb-4 p-4 ${mode === "edit" ? "hidden" : ""}`}>
          <label className="flex items-center mb-1">
            Email ID <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            className="border border-gray-300 rounded-lg p-2 w-full"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div> */}

        <div className="w-1/2 mb-4 p-4">
          <label className="flex items-center mb-1">
            Email ID <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            className={`border border-gray-300 rounded-lg p-2 w-full ${
              mode === "edit" ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
            required
            value={email}
            disabled={mode === "edit"}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={`w-1/2 mb-4 p-4 ${mode === "edit" ? "hidden" : ""}`}>
          <label className="flex items-center mb-1">
            Password <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="password"
            className="border border-gray-300 rounded-lg p-2 w-full"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="w-1/2 mb-4 p-4">
          <label className="flex items-center mb-1">
            Select Role <span className="text-red-500 ml-1">*</span>
          </label>
          <select
            className="border border-gray-300 rounded-lg p-2 h-10 w-full"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="ROLE_ADMIN">ROLE_ADMIN</option>
            <option value="ROLE_CUSTOMER">ROLE_CUSTOMER</option>
            <option value="ROLE_READONLY">ROLE_READONLY</option>
          </select>
        </div>
      </div>

      <button
        className={`bg-blue-600 text-white py-2 mb-4 rounded-md font-semibold hover:bg-blue-700 flex ${
          mode === "edit" ? "w-1/7" : "w-1/6"
        } justify-center cursor-pointer relative left-4 bottom-4`}
        // onClick={addRow}
        onClick={mode === "edit" ? handleUpdate : handleAdd}
      >
        {mode === "edit" ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default UserManagement;
