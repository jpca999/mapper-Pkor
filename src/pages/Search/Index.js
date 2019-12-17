import React from 'react';
import Playground from './Playground.js'; 
import Grouped from './Grouped.js'; 
import CheckboxLabels from './CheckboxLabels.js';

import InputAdornments from './InputAdornments.js';

const Search = ()=>{
    return (
        <div > 
        <Playground />

        <Grouped />
        <InputAdornments />

        </div>
    ); 
}

export default Search; 
