import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

test("should render expenseList with expenses", () => {
	const wrapper = shallow(<ExpenseList expenses={expenses} />);
	expect(wrapper).toMatchSnapshot();
});

test("shold render ExpenseList with empty message", () => {
	const wrapper = shallow(<ExpenseList expenses={[]} />);
	expect(wrapper).toMatchSnapshot();
});