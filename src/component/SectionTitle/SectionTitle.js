import React, {Fragment} from 'react';
import classes from './SectionTitle.module.css';

const sectionTitle = (props) => {
    return(
        <div className={classes.Container}>
        <div className={classes.SectionTitle}>
            {props.children}
        </div>
            <div className={classes.Border}/>
        </div>
    )
};

export default sectionTitle;
