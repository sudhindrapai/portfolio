import React,{Fragment} from 'react';
import classes from './WorkGridView.module.css';

const workGridView = (props) => {

    return(
        <Fragment>
            <div className={classes.ProjectName}> {props.projectObj.projectName}</div>
            <div className={classes.ProjectNameUnderLine} />
            <div className={classes.ProjectImage}>
            <img src={props.projectObj.imgUrl} alt={props.projectObj.projectName} />
            </div>
            <div className={classes.Description}>
                {props.projectObj.description}
            </div>
        </Fragment>
    )
};
export default workGridView
