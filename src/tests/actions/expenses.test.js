import {addExpense , removeExpense,editExpense} from './../../actions/expenses';

test('setup remove expense object',()=>{
    const action=removeExpense('123abc');
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('setup edit expense object',()=>{
    const action=editExpense('123abc',{amount:40});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
       updates:{
           amount:40
       }
    });
});

test('add expense with params',()=>{
   const expenseObject={
        description:'runaway',
        note:'to runaway',
        amount:1500,
        createdAt:150000
    };
    const action=addExpense(expenseObject);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseObject,
            id:expect.any(String)
        }
    });
});

test('add expense without params', () => {
   
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description:'',
            amount:0,
            note:'',
            createdAt:0
        }
    });
});
