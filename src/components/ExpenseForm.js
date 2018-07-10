import React from 'react';
import moment from 'moment';
import 'react-dates/initialize'; 
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    
    constructor(props){
        super(props);
       this.state = {
            description: props.expense?props.expense.description:'',
            note: props.expense?props.expense.note:'',
            amount: props.expense?(props.expense.amount).toString():'',
            createdAt: props.expense?moment(props.expense.createdAt):moment(),
            calenderFocused: false,
            error: ''
        };
    }
    
  

    DescriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({description}));
    };

    NoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>({note}));
    }

    onAmountChange=(e)=>{
        const amount=e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(()=>({amount}));
    }
    }

    onDateChange=(createdAt)=>{
        if(createdAt)
            this.setState(() => ({ createdAt }));
    }

    onFocusChange=({focused})=>{
        this.setState(()=>({calenderFocused:focused}));
    }
    onSubmit=(e)=>{
            e.preventDefault();
            if(!this.state.description || !this.state.amount){
                this.setState(()=>({error:'Form incomplete'}));
            }else{
                this.setState(()=>({error:''}));
                this.props.onSubmit({
                    description:this.state.description,
                    amount:parseFloat(this.state.amount,10),
                    createdAt:this.state.createdAt.valueOf(),
                    note:this.state.note
                })
            }
    }


    render(){
        return(
        
            <form className="form" onSubmit={this.onSubmit} >
                {this.state.error && <p>{this.state.error}</p>}
                    <input type="text" placeholder="Description" className="text-input"
                 value={this.state.description}
                 onChange={this.DescriptionChange}
                />
               <div className="aNd">
                    <input type="text" placeholder="Amount"
                        className="text-input"
                        onChange={this.onAmountChange}
                        value={this.state.amount}
                    />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
               </div>
                <textarea placeholder="Add a note for your expenses(optional)"
                class="textarea"
                 cols="30" rows="5"
                 value={this.state.note}
                 onChange={this.NoteChange}
                 ></textarea>
                <div>
                    <button className="button">Add Expense</button>
                </div>
                 
            </form>

        );
    }
};