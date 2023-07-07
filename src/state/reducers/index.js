import { combineReducers } from "redux";
import { amountReudcer } from "./amountReudcer";

const reducers = combineReducers({
    amount: amountReudcer
})

export default reducers