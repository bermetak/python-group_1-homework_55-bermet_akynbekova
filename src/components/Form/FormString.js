import React from 'react';


function FormString(props) {

    return <div className='row'>
        <label htmlFor={props.name} className='col label'>{props.name}</label>
        <div className='col'>
            <button onClick={props.onLess}>Less</button>
            <input type="number" id='{props.name}' value={props.count}/>
            <button onClick={props.onMore}>More</button>
        </div>
    </div>

}

export default FormString