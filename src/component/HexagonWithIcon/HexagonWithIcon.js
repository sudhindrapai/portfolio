import React from 'react';
import classes from './HexagonWithIcon.module.css';

const hexagonWithIcon = (props) => {
    return(
        <div className={classes.Container}>
            <div className={classes.HexagonOne} />
            <div className={classes.HexagonTwo}/>
            <div className={classes.HexagonThree} />
            <div className={classes.Icon}>
            {props.children}
            </div>
        </div>
    )
};

export default hexagonWithIcon
