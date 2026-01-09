import { combineReducers } from "redux";
import { modifyTable } from "./modifyTableReducers";
import { toggleModal } from "./modalOpenReducer";
import { authReducer } from "./authReducer";
import { accountReducer } from "./accountReducer";

const RootReducer = combineReducers({
  modifyTable,
  toggleModal,
  auth: authReducer,
  accounts: accountReducer,
});

export default RootReducer;
