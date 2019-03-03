
//before thunk
// import { createStore, combineReducers } from "redux";
// import expensesReducer from "../reducers/expenses";
// import filtersReducer from "../reducers/filters";

// export default () => {
// 	//Store creation
// 	const store = createStore(
// 		combineReducers({
// 			expenses: expensesReducer,
// 			filters: filtersReducer
// 		}),
// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 	);
// 	return store;
// };


//with thunk
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
	//Store creation
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
};
