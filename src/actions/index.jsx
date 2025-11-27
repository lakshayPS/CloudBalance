export const addUser = (user) => {
  return {
    type: "addUser",
    payload: user,
  };
};

export const updateUser = (user) => {
  return {
    type: "updateUser",
    payload: user,
  };
};

export const toggleModal = () => ({
  type: "toggleModal",
});
