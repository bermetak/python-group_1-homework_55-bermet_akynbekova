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

    state = {
        ingredients: [
            {name: 'salad', count: 0, total: 0},
            {name: 'cheese', count: 0, total: 0},
            {name: 'meat', count: 0, total: 0},
            {name: 'bacon', count: 0, total: 0},
        ]
    };


    changeCount = (name, value) => {
        let ingredient = Object.values({...this.state.ingredients}).find(item => item.name === name);
        let price = allIngredients.find(item => item.name === name).price;
        ingredient.count += value;

        ingredient.total = ingredient.count * price;

        let ingredients = {...this.state.ingredients};
        let state = {...this.state};
        state.ingredients = ingredients;

        this.setState(state);
    };
    onChangeCount = (event, name) => {
        let ingredient = Object.values({...this.state.ingredients}).find(item => item.name === name);

        let price = allIngredients.find(item => item.name === name).price;
        ingredient.count = event.target.value;

        ingredient.total = ingredient.count * price;

        let ingredients = {...this.state.ingredients};

        let state = {...this.state};
        state.ingredients = ingredients;

        this.setState(state);
    };

    totalPrice = () => {
        let total = Object.values(this.state.ingredients).map(function(item) {
              return item.total;
            });
        console.log(total)
        let totalSum = 20
        for (var i = 0; i < total.length; i++) {
            totalSum += total[i];
        }
        console.log('totalSum')
        console.log(totalSum)
        return totalSum
    };


    render() {
        return (
            <div className="App">
                <Burger ingredients={this.state.ingredients}/>
                <Form
                    allIngredient={allIngredients}
                    ingredients={this.state.ingredients}

                    onLess={this.changeCount}
                    onMore={this.changeCount}
                    total={this.totalPrice()}
                    hangleChange={this.onChangeCount}
                />

            </div>
        );
    }
}

export default App;
