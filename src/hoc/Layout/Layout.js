import React from 'react';
import classes from './Layout.module.css';

import NavMenu from '../../component/NavMenu/NavMenu';

const layout = (props) => {
    return(
        <div className={classes.Container}>
            <div className={classes.NavMenu}>
                <NavMenu />
            </div>
            <div className={classes.LayoutBody}>
                {props.children}
            </div>
        </div>
    )
};

export default layout
