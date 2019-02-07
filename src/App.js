import React, {Component} from 'react';
import './App.css';
import Burger from './components/Burger/Burger';
import Form from './components/Form/Form'

const allIngredients = [
    {name: 'salad', price: 5, label: 'Салат'},
    {name: 'cheese', price: 20, label: 'Сыр'},
    {name: 'meat', price: 30, label: 'Мясо'},
    {name: 'bacon', price: 20, label: 'Бекон'}
];

class App extends Component {
    // state = {
    //     ingredients: {
    //         salad: {count: 2, total: 0},
    //         cheese: {count: 1, total: 0},
    //         meat: {count: 1, total: 0},
    //         bacon: {count: 2, total: 0},
    //     }
    // };
    constructor(props) {
        super(props);

        this.state = {
            ingredients: [
                {name: 'salad', count: 2, total: 0},
                {name: 'cheese', count: 1, total: 0},
                {name: 'meat', count: 1, total: 0},
                {name: 'bacon', count: 2, total: 0},
            ]
        };
Object.keys(this.state)

        this.changeCount = (name, value) => {

            let ingredient = {...this.state.ingredients.find(item => item.name === name)};

            let price = allIngredients.find(item => item.name === name).price;
            ingredient.count += value;

            ingredient.total = ingredient.count * price;

            let ingredients = {...this.state.ingredients};


            let state = {...this.state};
            state.ingredients = ingredients;

            this.setState(state);
        };
    }

    render() {
        return (
            <div className="App">
                <Burger ingredients={this.state.ingredients}/>
                <Form
                    ingredients={this.state.ingredients}

                    countDown={(name) => this.changeCount(name, -1)}
                    countUp={(name) => this.changeCount(name, +1)}
                />

            </div>
        );
    }
}

export default App;
