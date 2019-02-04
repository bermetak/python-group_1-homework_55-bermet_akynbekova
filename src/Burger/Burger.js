import React from 'react';
import Bacon from './Bacon';
import Cheese from './Cheese';
import Meat from './Meat';
import Salad from './Salad';



function Burger(props) {
    const {salad, cheese, meat, bacon} = props.ingredients

    return <div className='Burger'>
        <div className='BreadTop'>
            <div className='Seeds1'></div>
            <div className='Seeds2'></div>
        </div>



        <div className='BreadBottom'></div>

    </div>
}

export default Burger