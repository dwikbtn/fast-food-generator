import React from 'react';

import classes from './Layout.module.css';

const Layout = (props) => (
    <>
        <div>Toolbaar, SideDrawer, Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </>
);

export default Layout;