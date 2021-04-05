import React, { useReducer } from 'react';
import '../css/FoodMenuPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BiPlus} from 'react-icons/bi';

import foodData from './food-menu';

function FoodMenuPage(){

const [br,toggleBr] =useReducer(
    (br) => !br,
    false
);

const [sa,toggleSa] =useReducer(
    (sa) => !sa,
    false
);

const [pi,togglePi] =useReducer(
    (pi) => !pi,
    false
);

const [barf,toggleBarf] =useReducer(
    (barf) => !barf,
    false
);

const [bu,toggleBu] =useReducer(
    (bu) => !bu,
    false
);

const [lu,toggleLu] =useReducer(
    (lu) => !lu,
    false
);

const [de,toggleDe] =useReducer(
    (de) => !de,
    false
);

const [pan,togglePan] =useReducer(
    (pan) => !pan,
    false
);

const [sand,toggleSand] =useReducer(
    (sand) => !sand,
    false
);

const [eggs,toggleEggs] =useReducer(
    (eggs) => !eggs,
    false
);


const foodBrunch = foodData.map (item =>{
if (item.category === "brunch") {
    return(
        <>

        <div className="d-flex align-items-center justify-content-start row">

            <div className="plate-name col-sm-3">
                <h2 className="mr-4">
                    {item.name}
                </h2>
            </div>
                
            <div>
                <p className="ingre letter-spacing col-sm-9">
                    {item.ingredients}
                </p>
            </div>

        </div>

        </>
    );
}
                  
})

    const foodPancakes = foodData.map (item =>{
        if (item.subcategory === "pancakes") {
            return(
                <>
    
                <div className="d-flex align-items-center justify-content-start row">
    
                    <div className="plate-name col-sm-3">
                        <h2 className="mr-4">
                            {item.name}
                        </h2>
                    </div>
                    
                    <div>
                        <p className="ingre letter-spacing col-sm-9">
                            {item.ingredients}
                        </p>
                    </div>
    
                </div>
    
                </>
            );
        }
                      
    })

    const foodSadwich = foodData.map (item =>{
        if (item.subcategory === "sandwich") {
            return(
                <>
        
                <div className="d-flex align-items-center justify-content-start row">
        
                    <div className="plate-name col-sm-3">
                        <h2 className="mr-4">
                            {item.name}
                        </h2>
                    </div>
                        
                    <div>
                        <p className="ingre letter-spacing col-sm-9">
                            {item.ingredients}
                        </p>
                    </div>
        
                </div>
        
                </>
            );
        }
                          
    })

    const foodEggs = foodData.map (item =>{
        if (item.subcategory === "eggs") {
            return(
                <>
                <div className="d-flex align-items-center justify-content-start row">
            
                    <div className="plate-name col-sm-3">
                        <h2 className="mr-4">
                                {item.name}
                        </h2>
                    </div>
                            
                    <div>
                        <p className="ingre letter-spacing col-sm-9">
                                {item.ingredients}
                        </p>
                    </div>
            
                </div>
            
                </>
                );
        }
                              
    })

const foodSalads = foodData.map (item =>{
    if (item.category === "salads") {
        return(
            <>
            <div className="d-flex align-items-center justify-content-start row">
    
                <div className="plate-name col-sm-3">
                    <h2 className="mr-4">
                        {item.name}
                    </h2>
                </div>
                
                <div>
                    <p className="ingre letter-spacing col-sm-9">
                        {item.ingredients}
                    </p>
                </div>
    
            </div>
    
            </>
        );
    }
                        
})

const foodPizzete = foodData.map (item =>{
    if (item.category === "pizzete") {
        return(
            <>
        
            <div className="d-flex align-items-center justify-content-start row">
        
                <div className="plate-name col-sm-3">
                    <h2 className="mr-4">
                        {item.name}
                    </h2>
                </div>
                
                <div>
                    <p className="ingre letter-spacing col-sm-9">
                        {item.ingredients}
                    </p>
                </div>
        
            </div>
        
            </>
        );
    }
                            
})

const foodBarfood = foodData.map (item =>{
    if (item.category === "barfood") {
        return(
            <>
            
            <div className="d-flex align-items-center justify-content-start row">
            
                    <div className="plate-name col-sm-3">
                        <h2 className="mr-4">
                            {item.name}
                        </h2>
                    </div>
                
                <div>
                    <p className="ingre letter-spacing col-sm-9">
                        {item.ingredients}
                    </p>
                </div>
            
            </div>
            
            </>
        );
    }
                                
})

const foodBurger = foodData.map (item =>{
    if (item.category === "burger") {
        return(
            <>
            
            <div className="d-flex align-items-center justify-content-start row">
            
                <div className="plate-name col-sm-3">
                    <h2 className="mr-4">
                        {item.name}
                    </h2>
                </div>
                
                <div>
                    <p className="ingre letter-spacing col-sm-9">
                        {item.ingredients}
                    </p>
                </div>
            
            </div>
            
            </>
        );
    }
                                
})

const foodLunch = foodData.map ((item) =>{
    if (item.category === "lunch") {
        return(
            <>

        <div className="d-flex align-items-end justify-content-start row">
            
            <div className="plate-name col-sm-3 ">
                <h2 className="mr-4">
                    {item.name}
                </h2>
            </div>
                
            <div>
                <p className="ingre letter-spacing col-sm-9">
                    {item.ingredients}
                </p>
            </div>
                

        </div>
            
            </>
        );
    }
                        
})

    
const foodDessert = foodData.map ((item) =>{
    if (item.category === "dessert") {
        return(
             <>
        <div className="d-flex align-items-center justify-content-start row">

            <div className="plate-name col-sm-3">
                <h2 className="mr-4">
                    {item.name}
                </h2>
            </div>
                
            <div>
                <p className="ingre letter-spacing col-sm-9">
                    {item.ingredients}
                </p>
            </div>

        </div>
                
                </>
        );
    }
                            
})


    return(
        <>
        <div className="food-page">
        <div className="container food-menu text-light font-weight-bold"> 

{/* BRUNCH */}

        <div className="">
            <h1 className="display-4 ">
                <a href="#" onClick={toggleBr}><BiPlus /></a>
                    Brunch
            </h1>     
        </div>   



<div className="ml-4">
<h1 className={'border-top ' +
    (br ? '' : 'd-none')} >


        <a href="#" onClick={togglePan}><BiPlus /></a>
        Pancakes
        </h1>

        <div className={'border-top border-bottom ' +
    (pan ? '' : 'd-none')} >
        {foodPancakes}
        </div>



        <h1 className={'' +
    (br ? '' : 'd-none')} >
        <a href="#" onClick={toggleSand}><BiPlus /></a>Sandwich
        </h1>

        <div className={'border-top border-bottom ' +
    (sand ? '' : 'd-none')} >
        {foodSadwich}
        </div>


        <h1 className={'border-bottom ' +
    (br ? '' : 'd-none')} >
        <a href="#" onClick={toggleEggs}><BiPlus /></a>Eggs
        </h1>

        <div className={'border-top border-bottom ' +
    (eggs ? '' : 'd-none')} >
        {foodEggs}
        </div>

</div>
    


        

{/* SALADS */}

        <div className="">
            <h1 className="display-4">
                <a href="#" onClick={toggleSa}><BiPlus /></a>
                    Salads
            </h1>     
        </div>   

        <div className={'border-top border-bottom ' +
    (sa ? '' : 'd-none')} >
        {foodSalads}
        </div>

{/* PIZZETE */}

        <div className="">
            <h1 className="display-4">
                <a href="#" onClick={togglePi}><BiPlus /></a>
                    Pizzete
            </h1>     
        </div>   

        <div className={'border-top border-bottom ' +
    (pi ? '' : 'd-none')} >
        {foodPizzete}
        </div>

{/* BAR-FOOD */}

<div className="">
            <h1 className="display-4 ">
                <a href="#" onClick={toggleBarf}><BiPlus /></a>
                    Bar Food
            </h1>     
        </div>   

        <div className={'border-top border-bottom ' +
    (barf ? '' : 'd-none')} >
        {foodBarfood}
        </div>

{/* BURGERS */}

<div className="">
            <h1 className="display-4 ">
                <a href="#" onClick={toggleBu}><BiPlus /></a>
                    Burger
            </h1>     
        </div>   

        <div className={'border-top border-bottom ' +
    (bu ? '' : 'd-none')} >
        {foodBurger}
        </div>

{/* LUNCH */}
               
        <div className="">
            <h1 className="display-4 ">
                <a href="#" onClick={toggleLu}><BiPlus /></a>
                    Lunch
            </h1>     
        </div>   

        <div className={'border-top border-bottom ' +
    (lu ? '' : 'd-none')} >
        {foodLunch}
        </div>

{/* DESSERTS */}

        <div className="">
            <h1 className="display-4 mb-0">
                <a href="#" onClick={toggleDe}><BiPlus /></a>
                    Desserts
            </h1>     
        </div>   

        <div className={'border-top ' +
    (de ? '' : 'd-none')} >
        {foodDessert}
        </div>
    </div>
    </div>
        </>
    );    

}

export default FoodMenuPage;