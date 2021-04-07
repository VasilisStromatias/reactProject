import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const TestItem = ({item, key}) =>{
    const [show, setShow]=useState(1);

return(
    <div key={key}>

        <button onClick={()=>setShow ( show * -1 )}>
        {item.name}
        </button>

        <p className = { ' '+
            (show === 1 ? 'd-none' : '')
        }>
        {item.ingredients}
        </p>

    </div>     
);
        
       
};

export default TestItem;