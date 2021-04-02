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

const foodBrunch = foodData.map (item =>{
if (item.category === "brunch") {
    return(
        <>

            <div className="d-flex align-items-center justify-content-start">

                <h2 className="mr-4">
                    {item.name}
                </h2>

                <p className="ingre">
                    {item.ingredients}
                </p>

            </div>

        </>
    );
}
                    
})

const foodSalads = foodData.map (item =>{
    if (item.category === "salads") {
        return(
            <>
    
                <div className="d-flex align-items-center justify-content-start">
    
                    <h2 className="mr-4">
                        {item.name}
                    </h2>
    
                    <p className="ingre">
                        {item.ingredients}
                    </p>
    
                </div>
    
            </>
        );
    }
                        
    })

    const foodPizzete = foodData.map (item =>{
        if (item.category === "pizzete") {
            return(
                <>
        
                    <div className="d-flex align-items-center justify-content-start">
        
                        <h2 className="mr-4">
                            {item.name}
                        </h2>
        
                        <p className="ingre">
                            {item.ingredients}
                        </p>
        
                    </div>
        
                </>
            );
        }
                            
        })

        const foodBarfood = foodData.map (item =>{
            if (item.category === "barfood") {
                return(
                    <>
            
                        <div className="d-flex align-items-center justify-content-start">
            
                            <h2 className="mr-4">
                                {item.name}
                            </h2>
            
                            <p className="ingre">
                                {item.ingredients}
                            </p>
            
                        </div>
            
                    </>
                );
            }
                                
            })

        const foodBurger = foodData.map (item =>{
            if (item.category === "burger") {
                return(
                    <>
            
                        <div className="d-flex align-items-center justify-content-start">
            
                            <h2 className="mr-4">
                                {item.name}
                            </h2>
            
                            <p className="ingre">
                                {item.ingredients}
                            </p>
            
                        </div>
            
                    </>
                );
            }
                                
            })

const foodLunch = foodData.map ((item) =>{
    if (item.category === "lunch") {
        return(
            <>

            <div className="d-flex align-items-end justify-content-start">

                <h2 className="mr-4">
                    {item.name}
                </h2>

                <p className="ingre">
                    {item.ingredients}
                </p>

            </div>
            
            </>
        );
    }
                        
})

    
const foodDessert = foodData.map ((item) =>{
    if (item.category === "dessert") {
        return(
             <>
                <div className="d-flex align-items-center justify-content-start">

                    <h2 className="mr-4">
                        {item.name}
                    </h2>
        
                    <p className="ingre">
                        {item.ingredients}
                    </p>

                </div>
                
                </>
        );
    }
                            
})
        


    return(
        <>
        <div className="container food-menu text-light font-weight-bold"> 

{/* BRUNCH */}

        <div className="">
            <h1 className="display-4 ">
                <a href="#" onClick={toggleBr}><BiPlus /></a>
                    Brunch
            </h1>     
        </div>   




        <h3 className={'border-top border-bottom ml-4 ' +
    (br ? '' : 'd-none')} >
        <a href="#" onClick={toggleBr}><BiPlus /></a>
        Pancakes
        </h3>

        <h3 className={'border-top border-bottom ' +
    (br ? '' : 'd-none')} >
        <a href="#" onClick={toggleBr}><BiPlus /></a>Eggs
        </h3>

        <h3 className={'border-top border-bottom ' +
    (br ? '' : 'd-none')} >
        <a href="#" onClick={toggleBr}><BiPlus /></a>Sandwich
        </h3>



        

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
            <h1 className="display-4 ">
                <a href="#" onClick={toggleDe}><BiPlus /></a>
                    Desserts
            </h1>     
        </div>   

        <div className={'border-top ' +
    (de ? '' : 'd-none')} >
        {foodDessert}
        </div>
    </div>
        </>
    );    

}

export default FoodMenuPage;