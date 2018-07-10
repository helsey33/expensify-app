import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import filteredExpenses from './../selectors/expenses';
import expenseTotal from './../selectors/expenseTotal';
import numeral from 'numeral'

const ExpenseSummary = (props)=>{
    const amt= expenseTotal(props.expenses);
    return (
        <div className="page-header">
            <div className="content-container">
                {!!amt && <h1>Viewing <span>{props.expenses.length}</span> {props.expenses.length == 1 ? 'expense' : 'expenses'} totalling <span>{numeral(amt).format('$0,0.00')}</span></h1>}
                <div className="actions">
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: filteredExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);