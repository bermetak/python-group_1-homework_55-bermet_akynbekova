import React from 'react';


function FormString(props) {

    return <div className='row'>
        <label htmlFor={props.name} className='col label' key={props.id}>{props.name}</label>
        <div className='col'>
            <button onClick={props.onLess} disabled={props.buttonStatus}>Less</button>
            <input type="number" id='{props.name}' value={props.count} onChange={props.handleChange}/>
            <button onClick={props.onMore}>More</button>
        </div>
    </div>

}

export default FormString