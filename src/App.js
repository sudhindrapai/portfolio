import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import LandingPage from './container/LandingPage/LandingPage';
import About from './container/About/About';
import Work from './container/Work/Work';
import Cv from './container/CV/cv';

import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
        <Layout>
            <Switch>
                <Route path={"/home"} component={LandingPage} />
                <Route path={"/about"} component={About} />
                <Route path={"/work"} component={Work} />
                <Route path={"/cv"} component={Cv} />
                <Route path={"/"} component={LandingPage} />
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
