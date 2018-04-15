import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>&nbsp;
        <NavLink to='/create' activeClassName='is-active'>AddExpense</NavLink>&nbsp;
        <NavLink to='/edit' activeClassName='is-active'>EditExpense</NavLink>&nbsp;
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>&nbsp;
    </header>
);

export default Header;