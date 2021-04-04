import React, {useState} from 'react';
import cocktailData from './cocktail-data';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/SignatureCocktailPage.css';


function SignatureCocktailPage() {

    const [display, setDisplay] = useState (-1);

    const cocktails = cocktailData.map ((item,i)  =>{
        return (
            <>
            <div className="d-flex flex-column 
         font-italic text-center"
          key={i}>

        <button className="pointer text-decoration-none text-dark text-uppercase 
                    bg-warning display-4 "
                    onClick ={()=> setDisplay(i)}
                    >
                {item.name}
        </button>

        <p className= {'cocktail-description mb-0 bg-dark text-light letter-spacing ' + 
            ((display===i) ? 'd-flex align-items-center justify-content-center' : 'd-none') }>
                {item.description}
        </p>
        </div>
            </>
        );
    })





    return (
        <>   
        <p className="info mb-0 ">Click to see/hide all the inredients</p>
        {cocktails}
        </>
    );
}


export default SignatureCocktailPage;