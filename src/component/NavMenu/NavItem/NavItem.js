import React from 'react';
import classes from './NavItem.module.css';

const navItem = (props) => {

    let navItemClasses = null;

    if (props.navObj.isSelected) {
        navItemClasses = [classes.NavItem, classes.Selected].join(" ");
    } else {
        navItemClasses = [classes.NavItem];
    }

    return(
        <div onClick={() => {props.onClickMenuItem(props.navObj)}} className={navItemClasses}>
            {props.navObj.label}
        </div>
    )
};

export default navItem;
