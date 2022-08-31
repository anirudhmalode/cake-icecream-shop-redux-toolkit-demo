const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;
const { fetchUsers } = require('./features/user/userSlice');

console.log("Initial State --->", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated State --->", store.getState()));
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(cakeActions.restocked(9));
// store.dispatch(icecreamActions.restocked(15));

store.dispatch(fetchUsers());

// Due to fetchUsers is async no need to call unsubscribe.
// unsubscribe();