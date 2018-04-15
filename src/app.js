 
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import {Provider} from 'react-redux';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
       
const store=configureStore();
store.dispatch(addExpense({ description: 'Water Bill', amount: 300, createdAt: 300000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 800, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1000 }));



const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));