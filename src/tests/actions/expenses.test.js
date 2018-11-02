import { addExpense, editExpense, removeExpense } from "../../redux/actions/expenses";

test("should setup remove expense action object", () => {
	const action = removeExpense({ id: "123abc" });
	expect(action).toEqual({
		type: "REMOVE_EXPENSE",
		id: "123abc"
	});
});

test("should setup edit expense action object", () => {
	const action = editExpense("123", { note: "note value" });
	expect(action).toEqual({
		type: "EDIT_EXPENSE",
		id: "123",
		updates: {
			note: "note value"
		}
	});
});

test("should setup add expense action object with provided values", () => {
	const expenseData = {
		description: "rent",
		note: "this was last months rent",
		amount: "109500",
		createdAt: 1000,
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	})
});

test("should setup the add expense action object with default values", () => {
	const action = addExpense();
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			id: expect.any(String),
			description: "",
			note: "",
			amount: 0,
			createdAt: 0
		}
	})
});