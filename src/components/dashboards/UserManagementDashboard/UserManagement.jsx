import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../../../actions";
// import { useNavigate } from "react-router";

const UserManagement = ({ mode, selectedRow, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");

  useEffect(() => {
    if (mode === "edit" && selectedRow) {
      setFirstName(selectedRow.firstName);
      setLastName(selectedRow.lastName);
      setEmail(selectedRow.email);
      setRoles(selectedRow.roles);
    }
  }, [mode, selectedRow]);

  const users = useSelector((state) => state.modifyTable.users);
  // const open = useSelector((state) => state.toggleModal.open);

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();

    const exists = users.some((user) => user.email === email);

    if (exists) {
      alert("User with this email already exists!");
      return;
    }

    const newUser = {
      id: users.length + 1,
      firstName,
      lastName,
      email,
      roles,
    };

    dispatch(addUser(newUser));

    handleClose();
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedUser = {
      id: selectedRow.id, // keep original ID
      firstName,
      lastName,
      email,
      roles,
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
        <div className="w-1/2 mb-4 p-4">
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
        </div>

        <div className="w-1/2 mb-4 p-4">
          <label className="flex items-center mb-1">
            Select Role <span className="text-red-500 ml-1">*</span>
          </label>
          <select
            className="border border-gray-300 rounded-lg p-2 h-10 w-full"
            required
            value={roles}
            onChange={(e) => setRoles(e.target.value)}
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
            <option value="read-only">Read Only</option>
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
