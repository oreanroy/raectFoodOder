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
    foodInCart: foodItem,
    checkout: false
    }
  }
  componentDidMount(){   //faking an api call
    setTimeout(() => {
      this.setState({
        food: foodItem
      })
    }, 100)
  }
  render() {
    console.log(this.state.foodInCart)
    const foodmenu = this.state.foodInCart.map(item => 
      <Body key={item.id} item={item} addcart={this.addcart} /> )
    console.log(foodmenu)
      return (
      <div>
        <Navbar />
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
