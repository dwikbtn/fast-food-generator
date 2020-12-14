import React from 'react';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) => (
    <>
        <Toolbar />
        <div>Toolbaar, SideDrawer, Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </>
);

export default Layout;