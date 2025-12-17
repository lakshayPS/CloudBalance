import { getAllUsers, registerUser, update } from "../services/authServices";

export const SET_USERS = "setUsers";
// export const GET_USERNAME = "getRole";

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await getAllUsers();
    console.log("responseeeee: ", response);
    const mappedUsers = response?.data.map((user, index) => {
      return {
        id: index + 1,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      };
    });

    dispatch({
      type: SET_USERS,
      payload: mappedUsers,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

// export const getUserName = () => async (dispatch) => {
//   dispatch({
//     type: GET_USERNAME,
//     payload: localStorage.getItem("email"),
//   });
// };

export const addUser = (user) => async (dispatch) => {
  try {
    const response = await registerUser(user);

    dispatch({
      type: "addUser",
      payload: response?.data,
    });
  } catch (error) {
    console.error(error);
    alert("Failed to add user");
  }
};

export const updateUser = (user) => async (dispatch) => {
  try {
    const response = await update(user);

    dispatch({
      type: "updateUser",
      payload: response,
    });
  } catch (error) {
    console.error(error);
    alert("Failed to update user");
  }
};

export const toggleModal = () => ({
  type: "toggleModal",
});

export const loginSuccess = (token, email, role) => ({
  type: "LOGIN_SUCCESS",
  payload: { token, email, role },
});
