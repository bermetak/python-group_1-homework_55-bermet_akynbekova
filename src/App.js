import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const price = {
    base: {price: 20},
    salad: {price: 5, label: 'Салат'},
    cheese: {price: 20, label: 'Сыр'},
    meat: {price: 50, label: 'Мясо'},
    bacon: {price: 30, label: 'Бекон'},
}

class App extends Component {
  state = {
  ingredients: {
    salad: {count: 0, total: 0},
    cheese: {count: 0, total: 0},
    meat: {count: 0, total: 0},
    bacon: {count: 0, total: 0},
  }}
}

  render() {
    return (
      <div className="App">
        <Burger ingredients = {this.state.ingredients}





      </div>
    );
  }
}

export default App;
