import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './pages/Main/Index.js';

import FieldDetails from './pages/Main/FieldDetails.js';


import AlignmentRadioBtns  from './components/Inputs/AlignmentRadioBtns.js';

import Search from './pages/Search/Index.js';


const App = () =>{
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/Search" exact component={Search} />
            <Route path="/grid" exact component={FieldDetails} />
            <Route path="/radio" exact component={AlignmentRadioBtns} />
        </BrowserRouter>
        );
}; 

export default App; 