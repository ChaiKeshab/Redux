import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";

const store = configureStore({
    reducer: {
        users: userSlice,   //this is your reducer(.reducer moved in UserSlice file)
    }
})

export default store