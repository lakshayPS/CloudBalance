import { combineReducers } from "redux";
import { modifyTable } from "./modifyTableReducers";
import { toggleModal } from "./modalOpenReducer";

const RootReducer = combineReducers({
  modifyTable,
  toggleModal,
});

export default RootReducer;
