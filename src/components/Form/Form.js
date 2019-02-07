import React, {Component} from 'react';
import FormString from "./FormString";


class Form extends Component {
    render() {

        return <div className='Form'>
            <h3>Ingredients</h3>
            {this.props.ingredients.map((item) => {
                return <FormString
                    name={item.name}
                    count={item.count}
                    onLess={this.props.countDown(item.name)}
                    onMore={this.props.countUp(item.name)}
                />
            })}

        </div>
    }
}

export default Form