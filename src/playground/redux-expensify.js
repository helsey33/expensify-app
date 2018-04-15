    import {createStore,combineReducers} from 'redux';
    import uuid from 'uuid';

    const addExpense=({
        description='',
        note='',
        amount=0,
        createdAt=0
    }={})=>({
        type:'ADD_EXPENSE',
        expense:{
            id:uuid(),
            description,
            note,
            amount,
            createdAt
        }
    });

    const removeExpense=(id)=>({
        type:'REMOVE_EXPENSE',
        id
    });

    const editExpense=(id,updates)=>({
        type:'EDIT_EXPENSE',
        id,
        updates
    });

    const setTextFilter=(text='')=>({
        type:'SET_TEXT',
        text
    });

    const sortByDate=()=>({
        type:'SORT_BY_DATE',
        date:'date'
    });

    const sortByAmount=()=>({
        type:'SORT_BY_AMOUNT',
        amount:'amount'
    });

    const setStartDate=(startDate)=>({
        type:'SET_START_DATE',
        startDate
    });
const setEndDate = (endDate) =>( {
    type: 'SET_END_DATE',
     endDate
});

    const expensesDefaultState=[];
    const expensesReducer=(state=expensesDefaultState,action)=>{
        switch(action.type){
            case 'ADD_EXPENSE':
                return [...state,action.expense];
            case 'REMOVE_EXPENSE':
                return state.filter(({id})=>id!=action.id);
            case 'EDIT_EXPENSE':
                return state.map((expense)=>{
                    if(expense.id==action.id)
                    return{
                        ...expense,
                        ...action.updates
                    };else
                       {
                        return expense;
                       }
                });
            default:return state;
        }
    };

    const filtersDefState={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
   const filterReducer=(state=filtersDefState,action)=>{
       switch (action.type) {
           case 'SET_TEXT':
               return { ...state, text:action.text};
            case 'SORT_BY_DATE':
                return {...state,sortBy:action.date};
            case 'SORT_BY_AMOUNT':
                return {...state,sortBy:action.amount};
            case 'SET_START_DATE':
                return {...state,startDate:action.startDate};
           case 'SET_END_DATE':
               return { ...state, endDate: action.endDate };
           default: return state;
       }
   };
    const store=createStore(
        combineReducers({
            expenses:expensesReducer,
            filters:filterReducer
        })
    );

    const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
        return expenses.filter((expense)=>{
            const startDateMatch= typeof startDate!=='number' || expense.createdAt>= startDate;
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b)=>{
            if(sortBy=='date')
                return a.createdAt<b.createdAt ? 1 : -1;
            else if (sortBy =='amount')
               return b.amount-a.amount; // return a.amount<b.amount?1:-1;
        });

    }

    store.subscribe(()=>{
        const state=store.getState();
       const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
       console.log(visibleExpenses);
    });


    const expOne=store.dispatch(addExpense({description:'Rent',amount:100,createdAt:100}));
const expTwo = store.dispatch(addExpense({ description: 'Milk', amount: 1260, createdAt: 2000}));
const expThree = store.dispatch(addExpense({ description: 'Curd', amount: 260, createdAt: 1000 }));

    // store.dispatch(removeExpense(expOne.expense.id));

    // store.dispatch(editExpense(expTwo.expense.id,{amount:800}));

   
    store.dispatch(sortByAmount());
    // store.dispatch(sortByDate());

    // store.dispatch(setStartDate(125));
    // store.dispatch(setStartDate());
    // store.dispatch(setEndDate(1250));
