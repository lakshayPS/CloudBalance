import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../../../actions";
import {
  getAllAccounts,
  getAssignedAccountsByUserId,
} from "../../../services/authServices";

const UserManagement = ({ mode, selectedRow, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const [accounts, setAccounts] = useState([]);
  const [selectedAccounts, setSelectedAccounts] = useState([]);

  const fetchAccounts = async () => {
    try {
      const response = await getAllAccounts();

      const data = Array.isArray(response)
        ? response
        : Array.isArray(response?.data)
        ? response?.data
        : [];

      setAccounts(data);

      if (mode === "edit" && selectedRow?.email) {
        const preselected = data
          .filter((acc) => acc.userEmails?.includes(selectedRow?.email))
          .map((acc) => acc.accId);

        setSelectedAccounts(preselected);
      }
    } catch (error) {
      console.error("Error fetching accounts", error);
      setAccounts([]);
    }
  };

  const fetchAssignedAccounts = async (id) => {
    try {
      if (!id) return;

      const response = await getAssignedAccountsByUserId(id);
      const data = Array.isArray(response?.data) ? response.data : [];

      setSelectedAccounts(data.map((acc) => acc.accId));
    } catch (err) {
      console.error("Error while fetching accounts: ", err);
    }
  };

  const editSetter = (selectedRow) => {
    setFirstName(selectedRow.firstName);
    setLastName(selectedRow.lastName);
    setEmail(selectedRow.email);
    setRole(selectedRow.role);
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setRole("");
    setPassword("");
  };

  useEffect(() => {
    if (mode === "edit" && selectedRow) {
      editSetter(selectedRow);
    } else {
      resetForm();
    }
  }, [mode, selectedRow]);

  useEffect(() => {
    if (role === "ROLE_CUSTOMER") {
      fetchAccounts();
    } else {
      setAccounts([]);
      setSelectedAccounts([]);
    }
  }, [role]);

  useEffect(() => {
    fetchAssignedAccounts(selectedRow?.id);
  }, [selectedRow]);

  const users = useSelector((state) => state.modifyTable.users);

  const dispatch = useDispatch();

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await dispatch(
        addUser(
          { firstName, lastName, email, role, password },
          selectedAccounts
        )
      );
      handleClose();
    } catch {
      console.error("Add user failed");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await dispatch(
        updateUser(
          {
            id: selectedRow.id,
            firstName,
            lastName,
            email,
            role,
          },
          selectedAccounts
        )
      );
      handleClose();
    } catch {
      console.error("Update failed");
    }
  };

  const handleAccountToggle = (accountId) => {
    setSelectedAccounts((prev) =>
      prev.includes(accountId)
        ? prev.filter((id) => id !== accountId)
        : [...prev, accountId]
    );
  };

  return (
    <div className="w-full bg-white my-3 shadow-2xs rounded-xs">
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

        {role === "ROLE_CUSTOMER" && (
          <div className="w-full mb-4 p-4">
            <label className="flex items-center mb-2 font-semibold">
              Assign Accounts
            </label>

            <div className="max-h-40 overflow-y-auto border rounded-lg p-3">
              {accounts?.length === 0 && (
                <p className="text-sm text-gray-500">No accounts available</p>
              )}

              {accounts?.map((acc) => (
                <div key={acc.accId} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedAccounts.includes(acc.accId)}
                    onChange={() => handleAccountToggle(acc.accId)}
                  />

                  <span className="text-sm">
                    {acc.accName}
                    <span
                      className={`ml-2 text-xs font-semibold ${
                        acc.accStatus === "ORPHANED"
                          ? "text-green-600"
                          : "text-orange-600"
                      }`}
                    >
                      ({acc.accStatus})
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
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
