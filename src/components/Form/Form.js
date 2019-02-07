import React, {Component} from 'react';
import FormString from "./FormString";


class Form extends Component {

    render() {
        let Array = Object.values(this.props.ingredients)
        let allIngredients = this.props.allIngredient


        return <div className='Form'>
            <h3>Ingredients</h3>
            {allIngredients.map((item, j) => {
                return <FormString
                    name={item.name}
                    id={j}
                    count={Array.find(i => i.name === item.name).count}
                    buttonStatus ={ (Array.find(i => i.name === item.name).count) <= 0 ? true : false}
                    onLess={() => {return this.props.onLess(item.name, -1)}}
                    onMore={() => {return this.props.onLess(item.name, 1)}}
                    handleChange={(event) => {return this.props.hangleChange(event, item.name)}}
                />
            })}
            <h4>Current price: {this.props.total}</h4>

        </div>
    }
}
export default Form