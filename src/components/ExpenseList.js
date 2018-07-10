import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filteredExpenses from './../selectors/expenses';
const ExpenseList=(props)=>{
    return(
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No expenses</span>
                    </div>
                ) : (
                        props.expenses.map((expense) => {
                            return <ExpenseListItem key={expense.id} {...expense} />;
                        })
                    )
            }
            <div className="space"></div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: filteredExpenses(state.expenses,state.filters)
    };
};
export default connect(mapStateToProps)(ExpenseList);

