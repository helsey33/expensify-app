import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from './../components/dashboard';
import AddExpensePage from './../components/addExpense';
import EditExpensePage from './../components/editExpense';
import HelpPage from './../components/help';
import NotFound from './../components/notfound';
import LoginPage from './../components/LoginPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();

const AppRouter=()=>(
    <Router history={history}>
        <div> 
            <Switch>
                <Route path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={ExpenseDashboardPage}  />
                <PrivateRoute path='/create' component={AddExpensePage} />
                <PrivateRoute path='/edit/:id' component={EditExpensePage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;