import uuid from 'uuid';
import database from './../firebase/firebase';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData={})=>{
return (dispatch,getState)=>{
    const uid=getState().auth.uid;
    const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
        dispatch(addExpense({
            id: ref.key,
            ...expense
        }));
    });
}
}

//REMOVE_EXPENSES
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = (id) =>{
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense(id));
        })
    }
}


//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id,updates) =>{
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id,updates));
        })
    }
}

//SET EXPENSES
const setExpenses = (expenses)=>({
    type:'SET_EXPENSES',
    expenses
});

export const startSetExpenses = ()=>{
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value',(snapshot)=>{
           const arr = [];
           snapshot.forEach((childSnapshot) => {
               arr.push({
                   id: childSnapshot.key,
                   ...childSnapshot.val()
               });
           });
         dispatch(setExpenses(arr));
       })
    }
}