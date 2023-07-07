import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    // amount: 'amountSlice',
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) { },
        deleteUser(state, action) { },
    }
})

// console.log(userSlice.actions)
export default userSlice.reducer
export const { addUser } = userSlice.actions
export const { removeUser } = userSlice.actions
export const { deleteUser } = userSlice.actions 
