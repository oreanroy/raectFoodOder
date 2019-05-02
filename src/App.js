import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Body from './components/Body'
import foodItem from './Data/foodData'

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

//function App(){
//  console.log(foodItem)
//  return (
//    <div>
//    <Navbar />
//
//    <Body />
//
//    <Footer />
//    </div>
//  )
//}


class App extends React.Component {
  constructor() {
    super()
    this.state = {
    food: [],
    foodInCart: [],
    checkout: false
    }
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.filterRating = this.filterRating.bind(this)
    this.filterCategory = this.filterCategory.bind(this)
    this.filterPrice = this.filterPrice.bind(this)
    this.displayAll = this.displayAll.bind(this)
  }
  componentDidMount(){   //faking an api call
    setTimeout(() => {
      this.setState({
        food: foodItem
      })
    }, 100)
  }

  addToCart(id) {
    //add to cart here or increase the count
    var newcart = this.state.foodInCart
    var foods = this.state.food
    for (const item in foods ) {
      //console.log(foods[item])
      if (foods[item].id === id){
        console.log(foods[item])
        if (foods[item].cart !== true){
          foods[item].cart = true
          newcart.push(foods[item])
        }
        foods[item].count = foods[item].count+1
      }
    }
    this.setState({
      foodInCart: newcart,
      food: foods
    })
    console.log(this.state.foodInCart)
    console.log("i ran from inside")
  }

  removeFromCart(id) {
    var newcart = this.state.foodInCart
    var foods = this.state.food
    for (const item in foods ) {
      //console.log(foods[item])
      if (foods[item].id === id){
        console.log(foods[item])
        if (foods[item].cart === true && foods[item].count===1){
          foods[item].cart = false
          newcart.pop(foods[item])
        }
        if(foods[item].count >= 1)
        foods[item].count = foods[item].count-1
      }
    }
    this.setState({
      foodInCart: newcart,
      food: foods
    })
    console.log(this.state.foodInCart)
  }

  filterRating(val) {
    var foods = foodItem
    const filtered = foods.filter(food => food.rating >= val)
    this.setState({
      food: filtered
    })
    console.log("i was called"+val)
    console.log(filtered)
  }
  filterCategory(val) {

    var foods = foodItem
    const filtered = foods.filter(food => food.type === val) //filter based on category of food
    this.setState({
      food: filtered
    })
    console.log("i was called"+val)
    console.log(filtered)
  }
  filterPrice(val) {

    var foods = foodItem
    const filtered = foods.filter(food => food.price <= val)
    this.setState({
      food: filtered
    })
    console.log("i was called"+val)
  }
  displayAll(){
    this.setState({
      food: foodItem
    })
  }



  render() {
   // console.log(this.state.foodInCart)
   const itemsInCart = this.state.foodInCart.length
   
    const foodmenu = this.state.food.map(item => 
      <Body key={item.id} item={item} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/> )
    //console.log(foodmenu)
      return (
      <div>
        <Navbar filterRating={this.filterRating} filterCategory={this.filterCategory} filterPrice={this.filterPrice} displayAll={this.displayAll} inCart={itemsInCart}/>
        <div className="container">
          <div className="row myrow col-12">
          {foodmenu}
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}



export default App;
