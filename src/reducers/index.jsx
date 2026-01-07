import { combineReducers } from "redux";
import { modifyTable } from "./modifyTableReducers";
import { toggleModal } from "./modalOpenReducer";
import { authReducer } from "./authReducer";

const RootReducer = combineReducers({
  modifyTable,
  toggleModal,
  auth: authReducer,
});

export default RootReducer;
