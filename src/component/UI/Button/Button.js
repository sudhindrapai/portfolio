import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    return(
        <button type={props.btnType}
                onClick={props.clicked}
                disabled={props.isBtnDisabled}
                className={[classes.Btn, classes[props.btnSizeType], classes[props.btnClassName]].join(" ")} >
            {props.children}
        </button>
    )
};
export default button;
