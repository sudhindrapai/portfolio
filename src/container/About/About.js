import React from 'react';
import classes from './About.module.css';

// import of other components
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import HexagonWithIcon from '../../component/HexagonWithIcon/HexagonWithIcon';
import SkillProgressBar from '../../component/SkillPercentProgressBar/SkillPercentProgressBar';

// import of images
import sudhindrImageUrl from '../../images/sudhindra.png'

// import of project icons
import {AboutUsFastIcon,
    AboutUsResponsive,
    AboutUsBulb,
    AboutUsDynamic} from '../../ProjectIcons/ProjectIcons';

const about = () => {
    return(
        <div className={classes.Container}>
            <SectionTitle>
                About
            </SectionTitle>
            <div className={classes.AboutBulletPointsContainer}>
                <div className={classes.Points}>
                    <HexagonWithIcon>
                        <AboutUsFastIcon/>
                    </HexagonWithIcon>
                    <div className={classes.Title}>
                        Fast
                    </div>
                    <div className={classes.SubTitle}>
                        Fast load times and lag free interaction, my highest priority.
                    </div>
                </div>
                <div className={classes.Points}>
                    <HexagonWithIcon>
                        <AboutUsResponsive/>
                    </HexagonWithIcon>
                    <div className={classes.Title}>
                        Responsive
                    </div>
                    <div className={classes.SubTitle}>
                        My layouts will work on any device, big or small.
                    </div>
                </div>
                <div className={classes.Points}>
                    <HexagonWithIcon>
                        <AboutUsBulb/>
                    </HexagonWithIcon>
                    <div className={classes.Title}>
                        Intuitive
                    </div>
                    <div className={classes.SubTitle}>
                        Strong preference for easy to use, intuitive UX/UI.
                    </div>
                </div>
                <div className={classes.Points}>
                    <HexagonWithIcon>
                        <AboutUsDynamic/>
                    </HexagonWithIcon>
                    <div className={classes.Title}>
                        Dynamic
                    </div>
                    <div className={classes.SubTitle}>
                        Websites don't have to be static, I love making pages come to life.
                    </div>
                </div>
            </div>
            <div className={classes.PhotoAndDetail}>
                <div className={classes.PhotoContainer}>
                        <img src={sudhindrImageUrl} alt={"developer Sudhindra Pai K"} />
                    <div className={classes.PhotoTitle}>
                        Who's this guy?
                    </div>
                    <div className={classes.PhotoSubTitle}>
                        I'm a Front-End Developer for
                        <a href={"https://ninjaas.com/"}> Ninjaas Labs Pvt</a> in Bengaluru, India.
                        I have serious passion for fast load time, SEO friendly, creating intuitive and
                        dynamic user experiences.
                    </div>
                </div>
                <div className={classes.SkillDetailsContainer}>
                    <div className={classes.SkillDetail}>
                        <SkillProgressBar SkillLabel={"HTML"} skillPercent={30} />
                    </div>
                    <div className={classes.SkillDetail}>
                        <SkillProgressBar SkillLabel={"CSS"} skillPercent={40} />
                    </div>
                    <div className={classes.SkillDetail}>
                        <SkillProgressBar SkillLabel={"JavaScript"} skillPercent={50} />
                    </div>
                    <div className={classes.SkillDetail}>
                        <SkillProgressBar SkillLabel={"jQuery"} skillPercent={40} />
                    </div>
                    <div className={classes.SkillDetail}>
                        <SkillProgressBar SkillLabel={"BootStrap"} skillPercent={50} />
                    </div>
                    <div className={classes.SkillDetail}>
                        <SkillProgressBar SkillLabel={"ReactJs"} skillPercent={40} />
                    </div>
                    <div className={classes.SkillDetail}>
                        <SkillProgressBar SkillLabel={"Redux"} skillPercent={60} />
                    </div>
                    <div className={classes.SkillDetail}>
                        <SkillProgressBar SkillLabel={"Jest"} skillPercent={20} />
                    </div>
                    <div className={classes.SkillDetail}>
                        <SkillProgressBar SkillLabel={"Git"} skillPercent={30} />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default about
