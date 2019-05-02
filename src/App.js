import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Body from './components/Body'
import foodItem from './Data/foodData'




class App extends React.Component {
  constructor() {
    super()
    this.state = {
    food: [],
    foodInCart: [],
    checkout: false,
    show: false //modal helping state.
    }
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.filterRating = this.filterRating.bind(this)
    this.filterCategory = this.filterCategory.bind(this)
    this.filterPrice = this.filterPrice.bind(this)
    this.displayAll = this.displayAll.bind(this)
    this.checkOut = this.checkOut.bind(this)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this); //binding for modal which is yet not implemented
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
    //console.log(this.state.foodInCart)
  }

  filterRating(val) {  //filtering based on rating
    var foods = foodItem                                      // rather than taking fooItem earlier state value of foods can  
    const filtered = foods.filter(food => food.rating >= val) //be taken to get add operation clubbed up by different filters
    this.setState({
      food: filtered
    })
  }

  filterCategory(val) {
    var foods = foodItem
    const filtered = foods.filter(food => food.type === val) //filter based on category of food
    this.setState({
      food: filtered
    })
    //console.log("i was called"+val)
    //console.log(filtered)
  }

  filterPrice(val) {

    var foods = foodItem
    const filtered = foods.filter(food => food.price <= val)
    this.setState({
      food: filtered
    })
  }

  displayAll(){
    this.setState({
      food: foodItem
    })
  }
  
  checkOut(){
    var totalfood = this.state.foodInCart
    var sum = 0
    var time = 0
    for (const item in totalfood){
      sum+=(totalfood[item].price)*(totalfood[item].count)//finding the total sum
      time+=(totalfood[item].time)*(totalfood[item].count)
    }
    const ret = {
      "sum": sum,
      "time": time
    }
    //console.log(ret)
    for(const item in foodItem){
      foodItem[item].count = 0  // removing all items from cart after checkout sum complete
      foodItem[item].cart = false
    }
    this.setState({
      food: foodItem,
      foodInCart: []
    })
    alert(`Your oder summary is ${ret.sum} $ and it will take ${ret.time} minutes to complete thank you!! Happying eating`)
    return ret
  }
  handleClose() {
    this.setState({ show: false });
  }// this is for modal compoent which will show the oder summary yet not attached

  handleShow() {
    this.setState({ show: true });
  } // this is for modal component too

  render() {
    
   // console.log(this.state.foodInCart)
   const itemsInCart = this.state.foodInCart.length
   
    const foodmenu = this.state.food.map(item => 
      <Body key={item.id} item={item} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/> )
    //console.log(foodmenu)
      return (
      <div>
        <Navbar 
          filterRating={this.filterRating} 
          filterCategory={this.filterCategory} 
          filterPrice={this.filterPrice} 
          displayAll={this.displayAll} 
          inCart={itemsInCart}
          checkOut={this.checkOut}
        />
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
