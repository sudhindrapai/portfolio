import React from 'react';
import classes from './Work.module.css';

// import of other modals
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import ProjectGrid from '../../component/WorkGrindView/WorkGridView';

//import of images
import ninjaasHomeScreen from '../../images/ninjaas_home_page.png';
import jumkeyHomeScreen from '../../images/jumkeyHome.png';
import posHomeScreen from '../../images/posHomeScreen.png';
import dayDreamHomeScreen from '../../images/dayDreamHomeScreen.png';
import partnersHomeScreen from '../../images/partnersHomeScreen.png';
import sellerCentralHomeScreen from '../../images/sellerCentral_homePage.jpg';
import sellerCentralAdminHomeScreen from '../../images/sellerCentral_admin_homePage.jpg';


class Work extends React.Component{
    state={
      projectList:[
          {
              key:"project_1",
              projectName:"Ninjaas Labs Pvt",
              imgUrl:ninjaasHomeScreen,
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreeu fugiat nulla pariatur."
          },
          {
              key:"project_2",
              projectName:"Jumkey.com",
              imgUrl:jumkeyHomeScreen,
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreeu fugiat nulla pariatur."
          },
          {
              key:"project_3",
              projectName:"Jumkey POS",
              imgUrl:posHomeScreen,
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreeu fugiat nulla pariatur."
          },
          {
              key:"project_4",
              projectName:"Day Dream intelligent service",
              imgUrl:dayDreamHomeScreen,
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreeu fugiat nulla pariatur."
          },
          {
              key:"project_5",
              projectName:"Partners.jumkey.com",
              imgUrl:partnersHomeScreen,
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreeu fugiat nulla pariatur."
          },
          {
              key:"project_6",
              projectName:"seller Central",
              imgUrl:sellerCentralHomeScreen,
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreeu fugiat nulla pariatur."
          },
          {
              key:"project_7",
              projectName:"seller Central Admin",
              imgUrl:sellerCentralAdminHomeScreen,
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreeu fugiat nulla pariatur."
          }
      ]
    };
    render() {

        let projectList = (this.state.projectList).map((projectObj) =>{
           return(
               <div key={projectObj.key} className={classes.ProjectDiv} >
               <ProjectGrid projectObj={projectObj} />
           </div>)
        });
        return(
            <div className={classes.Container}>
                <SectionTitle>
                    Projects
                </SectionTitle>
                <div className={classes.ProjectContainer}>
                    {projectList}
                </div>
            </div>
        )
    }
}

export default Work
