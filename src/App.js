import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main/Index.js';
import FieldDetails from './pages/Main/FieldDetails.js';
import NewFields from './pages/NewField/Index.js';
import Search from './pages/Search/Index.js';
import MainWrapper from './pages/Main/MainWrapper'; 
import ExpansionScreen from './pages/Main/ExpansionScreen.js';

import AllRules from './pages/AllRules/Index'; 
import CreateNewRule from './pages/CreateNewRule/Index'; 

import CreateFromExistingTemplate from './pages/CreateFromExistingTemplate/Index'; 
import RecentlyCreatedTemplates from './pages/RecentlyCreatedTemplates/Index'; 
import Login from './pages/Login/Index.js';
import NotFound from './pages/NotFound/Index.js'; 
import TemporaryDrawer from './components/DrawerDemo.js'; 

import ClientDetail from './pages/Search/ClientDetail.js';

import ModalFormDialog from './components/ModalFormDialog.js'; 

import { selectClient } from './actions'; 

const App = () =>{
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/ModalFormDialog" exact component={ModalFormDialog} />
                <Route exact path="/drawer" exact component={TemporaryDrawer} />
                <Route exact path="/login" exact component={Login} />

                <MainWrapper >
                    <Route exact path="/" exact component={ExpansionScreen} />
                    <Route exact path="/clientdetail" exact component={ClientDetail} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/search/:id" component={ClientDetail} />
                    <Route exact path="/newField" component={NewFields} />
                    <Route exact path="/AllRules" component={AllRules} />
                    <Route exact path="/CreateNewRule" component={CreateNewRule} />
                    <Route exact path="/CreateFromExistingTemplate" component={CreateFromExistingTemplate} />
                    <Route exact path="/RecentlyCreatedTemplates" component={RecentlyCreatedTemplates} />
                    {/* <Route exact component={NotFound} /> */}
                </MainWrapper>
            </Switch>
        </HashRouter>
        );
}; 

export default App; 