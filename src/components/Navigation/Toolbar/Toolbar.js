import React from 'react'

import Logo from '../../Logo/Logo'
import Navigation from '../../Navigation/NavigationItems'

import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar;