import { createSlice } from "@reduxjs/toolkit"

const removeUserLogic = (state, action) => {
    state.splice(action.payload, 1)
    // console.log(action)
}

const deleteUserLogic = () => {
    return []   //don't do state = []. it doesn't actually delete the data
}

const userSlice = createSlice({
    // amount: 'amountSlice',
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            // console.log(state)
        },

        removeUser: removeUserLogic,
        // we can define the function outside the createSlice and link it here. (to avoid rewirting it for extraReducers)

        deleteUser: deleteUserLogic,
    },

    extraReducers(builder) {
        builder
            .addCase(userSlice.actions.removeUser, removeUserLogic)
            .addCase(userSlice.actions.deleteUser, deleteUserLogic)
    }
    // Google/GPT on when to use extraReducers

    // extraReducers(builder) {
    //     builder.addCase(userSlice.actions.deleteUser, () => {
    //         return [];
    //     })
    // }

})

// console.log(userSlice.actions)
export default userSlice.reducer
export const { addUser, removeUser, deleteUser } = userSlice.actions
