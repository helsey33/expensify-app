import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from './../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Expense Form</h1>
        <ExpenseForm onSubmit={(expense)=>{
            props.dispatch(addExpense(expense));
            console.log(expense.createdAt);
            props.history.push('/');
        }}/>
    </div>
);

export default connect()(AddExpensePage);