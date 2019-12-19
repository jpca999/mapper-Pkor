import React from 'react'; 
import SimpleExpansionPanel from './SimpleExpansionPanel'; 
import BottomButtons from './BottomButtons'; 
import { makeStyles, useTheme } from '@material-ui/core/styles';

  
const ExpansionScreen = ()=>{
    return (
            <div >
                <SimpleExpansionPanel />
                <BottomButtons />
            </div>
    ); 
}

export default ExpansionScreen; 


       
       