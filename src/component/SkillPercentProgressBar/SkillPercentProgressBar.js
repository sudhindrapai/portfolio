import React,{Component} from 'react';
import classes from './SkillPercentProgressBar.module.scss';

class SkillPercentProgressBar extends Component{
    render() {
        return(
            <div className={classes.Container}>
                <div className={classes.Label}>
                    {this.props.SkillLabel}<span className={classes.SkillPercentage}>({this.props.skillPercent}%)</span>
                </div>
                <div className={classes.ProgressBarContainer}>
                    <div style={{"width":`${this.props.skillPercent}%`}} className={classes.PercentageValue} />
                </div>
            </div>
        )
    }
}

export default SkillPercentProgressBar;
