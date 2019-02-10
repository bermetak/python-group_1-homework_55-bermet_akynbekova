import React, {Component} from 'react';
import FormString from "./FormString";


class Form extends Component {

render () {


        return <div className='Form'>
            <h3>Ingredients</h3>
            {this.props.allIngredients.map((item, j) => {
                return <FormString
                    name={item.name}
                    id={j}
                    count={this.props.ingredients.find(i => i.name === item.name).count}
                    buttonStatus ={ (this.props.ingredients.find(i => i.name === item.name).count) <= 0 ? true : false}
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