import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Test.css';

import TestItem from './TestItem';
import foodData from'../pages/food-menu';

const Test = () => (
    <div>
        {foodData.map ((item,i) => <TestItem item={item} key={i} />)}
    </div>
);

export default Test;