import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter"
import configureStore from "./redux/store/configureStore"
import { addExpense } from "./redux/actions/expenses";
import { setTextFilter } from "./redux/actions/filters";
import getVisibleExpenses from "./redux/selectors/expenses";
import 'normalize.css/normalize.css';
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";


const timeStamp = 0;

const store = configureStore();

const waterBill = store.dispatch(addExpense({ description: "Water Bill", amount: 500, createdAt: timeStamp }));
const gasBill = store.dispatch(addExpense({ description: "Gas Bill", amount: 125, createdAt: timeStamp + 1 }));
store.dispatch(addExpense({ description: "Rent", amount: 1500, createdAt: 2 }));

// store.dispatch(setTextFilter("gas"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));






















// const Layout = (props) => {
//   return (
//     <div>
//       <p>Header</p>
//       {props.content}
//       <p>Footer</p>
//     </div>
//   );
// }

// const template = (
//   <div>
//     <h1>Page Title</h1>
//     <p>This is the page</p>
//   </div>
// )

// ReactDOM.render(<Layout content={template}/>, document.getElementById("app"))

//====================================

// const Layout = (props) => {
//   return (
//     <div>
//       <p>Header</p>
//       {props.children}
//       <p>Footer</p>
//     </div>
//   );
// }

// ReactDOM.render((
//   <Layout>
//     <p>This is inline</p>
//   </Layout>
//   ), 

//   document.getElementById("app"))











// class OldSyntax {
//   constructor(){
//     this.name = "mike";
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `hi, i"m ${this.name}`;
//   }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// //---

// class NewSyntax {
//   name = "jen";
//   getGreeting = () => {
//     return `hi, i"m ${this.name}`;
//   }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());