import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import ExpenseDashboardPage from './../components/dashboard';
import AddExpensePage from './../components/addExpense';
import EditExpensePage from './../components/editExpense';
import HelpPage from './../components/help';
import NotFound from './../components/notfound';
import Header from './../components/header';


const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;