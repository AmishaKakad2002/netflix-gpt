import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
const appStore = configureStore({
    reducer :{
       cart : userReducer,
    }
})

export default appStore;