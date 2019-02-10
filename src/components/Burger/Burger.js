import React from 'react';
import Bacon from './Bacon';
import Cheese from './Cheese';
import Meat from './Meat';
import Salad from './Salad';


function Burger(props) {
    let salad = props.ingredients.find(item => item.name === 'salad')
    let bacon = props.ingredients.find(item => item.name === 'bacon')
    let cheese = props.ingredients.find(item => item.name === 'cheese')
    let meat = props.ingredients.find(item => item.name === 'meat')


    let ingredient = [];
    for (let i = 0; i < salad.count; i++) ingredient.push(<Salad/>);
    for (let i = 0; i < bacon.count; i++) ingredient.push(<Bacon/>);
    for (let i = 0; i < cheese.count; i++) ingredient.push(<Cheese/>);
    for (let i = 0; i < meat.count; i++) ingredient.push(<Meat/>);



    return <div className='Burger'>
        <div className='BreadTop'>
            <div className='Seeds1'></div>
            <div className='Seeds2'></div>
        </div>
        {ingredient}

        <div className='BreadBottom'></div>

    </div>
}

export default Burger