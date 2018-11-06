import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../redux/actions/expenses";


export class AddExpensePage extends React.Component {
	onSubmit = (expense) => {
		this.props.addExpense(expense);
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<h1>Add Expense</h1>
				<ExpenseForm
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}
// const AddExpensePage = (props) => {
// 	return (
// 		<div>
// 			<h1>Add Expense</h1>
// 			<ExpenseForm 
// 				onSubmit={(expense)=>{
// 					// props.dispatch(addExpense(expense));
// 					props.onSubmit(expense);

// 					//sends up to home page
// 					props.history.push("/");
// 				}}
// 			/>
// 		</div>
// 	)
// }

const mapDispatchToProps = (dispatch) => ({
	addExpense: (expense) => dispatch(addExpense(expense))
});


export default connect(undefined, mapDispatchToProps)(AddExpensePage);
