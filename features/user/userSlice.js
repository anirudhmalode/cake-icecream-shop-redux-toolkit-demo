const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// createAsyncthunk --> Provides pending, fulfilled, rejected
const fetchUsers = createAsyncThunk('user/fetusers', () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.data.map(user => user.id))
})

const useSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state =>{
            state.loading = true
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload
        }),
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
            state.users = [],
            state.error = action.error.message
        })
    }
})

module.exports = useSlice.reducer;
module.exports.fetchUsers = fetchUsers;