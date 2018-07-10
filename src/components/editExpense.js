import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from './../actions/expenses';
import { startRemoveExpense } from './../actions/expenses';


const EditExpensePage = (props) => {
     
     return(
         <div>
             <div className="page-header">
                 <div className="content-container">
                     <h1>Edit Expense</h1>
                 </div>
             </div>
           <div className="content-container">
                 <ExpenseForm
                     expense={props.expense}
                     onSubmit={(expense) => {
                         props.dispatch(startEditExpense(props.expense.id, expense));
                         props.history.push('/dashboard');
                     }}
                 />
                 <button className="button button-secondary"
              onClick={() => {
                 props.dispatch(startRemoveExpense(props.expense.id));
                 props.history.push('/dashboard');
             }}> Remove </button>
           </div>
             <div className="space"></div>
         </div>
     );
}
   
   


const mapStateToProps=(state,props)=>{
    return{
      expense:state.expenses.find((expense)=>expense.id===props.match.params.id)  
    };
};

export default connect(mapStateToProps)(EditExpensePage);