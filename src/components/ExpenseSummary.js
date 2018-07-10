import React from 'react';
import { connect } from 'react-redux';
import filteredExpenses from './../selectors/expenses';
import expenseTotal from './../selectors/expenseTotal';
import numeral from 'numeral'

const ExpenseSummary = (props)=>{
    const amt= expenseTotal(props.expenses);
    return (
        <div>
            {!!amt && <h3>Viewing {props.expenses.length} {props.expenses.length==1?'expense':'expenses'} totalling {numeral(amt).format('$0,0.00')}</h3>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: filteredExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);