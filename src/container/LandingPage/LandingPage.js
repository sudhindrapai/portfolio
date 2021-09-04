import React from 'react';
import classes from './LandingPage.module.css';

const landingPage = () => {
    return(<div className={classes.Container}>
        <div className={classes.Title}>
            Hello, I'm <span className={classes.SpecialName}>Sudhindra Pai K</span>,
            <br />
            I'm UI developer
        </div>
    </div>)
};

export default landingPage
