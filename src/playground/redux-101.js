import {createStore} from 'redux';

const store=createStore((state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
        const incrementBy=typeof action.incrementBy==='number' ? action.incrementBy : 1;
            return{
                count:state.count+incrementBy
            };
        case 'DECREMENT':
            const decBy = typeof action.decBy === 'number' ? action.decBy : 1;
        return{
            count:state.count-decBy
        };
        case 'RESET':
            return{
                count:0
            };
        default:
            return state;
    }
});
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch({
    type:'INCREMENT',
    incrementBy:5
});
store.dispatch({
    type:'INCREMENT'
});
store.dispatch({
    type:'RESET'
});
store.dispatch({
    type:'DECREMENT',
    decBy:10
});

