import uuid from "uuid";
import database from "../../firebase/firebase";

//regualar
//component calls action generator
//action generator returns object
//component dispatches object
//redux store changes


//async
//component calls action generator
//action generator returns function
//component dispatches function
//function runs (has the abiity to dispatch other actions and do whatever it wants)

//add expense dispatches object
//before redux thunk
// const addExpense = (
// 	{
// 		description = "",
// 		note = "",
// 		amount = 0,
// 		createdAt = 0
// 	} = {}
// ) => ({
// 	type: "ADD_EXPENSE",
// 	expense: {
// 		id: uuid(),
// 		description,
// 		note,
// 		amount,
// 		createdAt
// 	}
// });

//after redux thunk
const addExpense = (expense) => ({
	type: "ADD_EXPENSE",
	expense
});

//AFter redux thunk. Start the addexpense process which will keep changing store. Returning a function which is why we need redux thunk middleware. 
const startAddExpense = (expenseData = {}) => {
	return (dispatch) => {
		const { 
			description = "",
			note = "",
			amount = 0,
			createdAt = 0
		} = expenseData;
		const expense = { description, note, amount, createdAt };
		
		return database.ref("expenses").push(expense).then((ref) => {
			dispatch(addExpense( {
				id: ref.key,
				...expense
			}))
		});
	};
};

//remove expense
const removeExpense = ({ id } = {}) => ({
	type: "REMOVE_EXPENSE",
	id
});

//edit expense
const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates
});

export { addExpense, startAddExpense, removeExpense, editExpense };