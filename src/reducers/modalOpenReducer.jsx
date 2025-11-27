const initialState = {
  open: false,
};

export const toggleModal = (state = initialState, action) => {
  switch (action.type) {
    case "toggleModal": {
      return {
        ...state,
        open: !state.toggleModal.open,
      };
    }
    default:
      return state;
  }
};
