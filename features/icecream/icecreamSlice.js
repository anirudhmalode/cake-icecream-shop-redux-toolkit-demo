const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeActions = require('../cake/cakeSlice');

const initialState = {
    numberOfIcecreams: 25
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIcecreams--
        },
        restocked: (state, action) => {
            state.numberOfIcecreams += action.payload
        }
    },
    // calling action of  reducer can affect other one.
    // e.g., One purchasing 1 cake, 1 icecream is free.
    extraReducers: {
        ['cake/ordered']: (state) => {
            state.numberOfIcecreams--
        }
    }
    // extraReducers: (builder) => {
    //     builder.addCase(cakeActions.ordered, state => {
    //         state.numberOfIcecreams--
    //     })
    // }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;