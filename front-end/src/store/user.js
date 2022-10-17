import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: null, 
    email: null,
    firstName: null,
    lastName: null,
    isLogged: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action)
        {
            state.id = action.payload.id
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.isLogged = true
        },
        updateUser(state, action)
        {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        logout(state)
        {
            state.id = null
            state.email = null
            state.firstName = null
            state.lastName = null
            state.isLogged = false
        }
    }
})

export const userActions = userSlice.actions

export default userSlice.reducer