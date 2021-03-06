import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount,setStartDate,setEndDate} from './../actions/filters';
import {DateRangePicker} from 'react-dates';
import uuid from 'uuid';
class ExpenseListFilters extends React.Component{
   state={
       calenderFocused:null
   };
   onDatesChange=({startDate,endDate})=>{
       this.props.dispatch(setStartDate(startDate));
       this.props.dispatch(setEndDate(endDate));
   }
   onFocusChange=(calenderFocused)=>{
       this.setState(()=>({calenderFocused}));
   }
   render(){
       return(
           <div className="content-container">
           <div className="input-group">
            <div className="item">
                       <input type="text" placeholder="Search Expenses"
                       className="text-input"
                       onChange={(e) => {
                           this.props.dispatch(setTextFilter(e.target.value));
                       }} />
            </div>
            <div className="item">
                       <select value={this.props.filters.sortBy} 
                       className="select"
                       onChange={(e) => {
                           if (e.target.value == 'date') {
                               this.props.dispatch(sortByDate());
                           }
                           else if (e.target.value == 'amount')
                               this.props.dispatch(sortByAmount());
                       }}>
                           <option value="date">Date</option>
                           <option value="amount">Amount</option>
                       </select>
            </div>
            <div className="item">
                       <DateRangePicker
                           startDate={this.props.filters.startDate}
                           startDateId={uuid()}
                           endDate={this.props.filters.endDate}
                           endDateId={uuid()}
                           onDatesChange={this.onDatesChange}
                           focusedInput={this.state.calenderFocused}
                           onFocusChange={this.onFocusChange}
                           showClearDates={true}
                           numberOfMonths={1}
                           isOutsideRange={() => false}
                       />
            </div>
           </div>
           </div>
       );
   }

}



const mapStateToProps= (state)=>(
    {
        filters:state.filters
    }
);
export default connect(mapStateToProps)(ExpenseListFilters);