import React, {Component} from 'react';
import classes from './NavMenu.module.css';

import {withRouter} from 'react-router-dom';

// import of other components
import NavItem from './NavItem/NavItem';

class NavMenu extends Component{
    state={
        navMenuOptions:[
            {
                label: "Home",
                redirectionPath:"/home",
                isSelected:true,
                id:"navItem_1"
            },
            {
                label: "About",
                redirectionPath:"/about",
                isSelected:false,
                id:"navItem_2"
            },
            {
                label: "Work",
                redirectionPath:"/work",
                isSelected:false,
                id:"navItem_3"
            }
        ]
    };

    static getDerivedStateFromProps (props,state) {
        // console.log(props,state,"getDerivedStateFromProps");
        if (props.location.pathname !== "/home" && props.location.pathname !== "/") {
            // let updatedArray = updateNavMenuOptions(props.location.pathname,)

            let menuArray = [];
            for (let menuObj of state.navMenuOptions) {
                menuObj.isSelected = menuObj.redirectionPath === props.location.pathname;
                menuArray.push(menuObj);
            }

            return{
                navMenuOptions: menuArray
            }
        }
    }

    updateNavMenuOptions = (menuRedirectionPath,menuOptionsArray) => {
        if (menuRedirectionPath !== undefined && menuOptionsArray !== undefined) {
            let menuArray = [];
            for (let menuObj of menuOptionsArray) {
                if (menuObj.redirectionPath === menuRedirectionPath) {
                    menuObj.isSelected = true;
                }
                menuArray.push(menuObj);
            }
            return menuArray
        }
    };

    redirectToSpecificPage = (menuObj) => {
        let updatedNavMenuItems = [];

        for (let navObj of this.state.navMenuOptions) {
            navObj.isSelected = navObj.id === menuObj.id;
            updatedNavMenuItems.push(navObj)
        }

        this.setState({
            ...this.state,
            navMenuOptions:updatedNavMenuItems
        });

        this.props.history.replace({
            pathname:menuObj.redirectionPath
        });
    };

    render() {

        let navItems = (this.state.navMenuOptions).map((navObj) =>{
           return <div key={navObj.id} className={classes.MenuItem}>
               <NavItem onClickMenuItem={this.redirectToSpecificPage} navObj={navObj} />
               </div>
        });

        return(
            <nav className={classes.container}>
                {navItems}
            </nav>
        )
    }
}

export default withRouter(NavMenu)
