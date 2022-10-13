import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "./user"

const store = configureStore({
    reducer: {
        user: UserReducer
    }
})

export default store