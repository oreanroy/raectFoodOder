## how to run

### `npm install`
### `npm start`

the json data is loaded from a file faking the mock api.
async call using componentDidMount.
i have broken different task in unit functions to replicate each unit performing different function

### `add items to cart using add button. The number of each item in cart will be diaplayed in card.`
### `to check the oder total click on check out `
### `bootstarp has been integrated to get a responsive design`
### 'search filter is yet to be implemeted was unable to implement due to time constarint`


Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

















# This part is documentaion for my help

	npx create-react-app my-app

to create a react app
	cd my-app
	npm start
the app has started, look for the structure. index.js file controls the rendering in index.html, app.js is imported in index.js and rendered inside the root div.

two elements cannot be rendered at same level. 
	ReactDOM.render(<h1>React is Fun</h1>, document.getElementById('root'));

like 
	ReactDOM.render(<h1>React is Fun<h1><h2>Wrong<h2>,
	document.getElementById('root'));

functional componet(this is in index.js)
	import React from "react"
	import ReactDOM from "react-dom"

	function MyApp() {
    		return (
        		<h1>this is more fun</h1>
    		)
	}


	ReactDOM.render(<MyApp />, document.getElementById('root'));

A component can also render other component

functional component imported from other file
create a file with same as the fucntion name(not necessary just to remember) 
	import React from "react"

	function MyInfo() {
	    return (
	        <h1>this is more fun</h1>
	    )
	}

	export default MyInfo

Now import this in your index.js and render it 

	import React from "react"
	import MyInfo from "./MyInfo.js"

	ReactDOM.render(<MyInfo />, document.getElementById('root'));


*Parent and child component*(react component have capital first letter)
create a component app the app will be the entry point in the whole application

<App /> >> <MyInfo /> >> <div> </div>
App  component will render a component MyInfo which will render some JSX

	import Footer from './Footer.js'
	function App() {
	  return (
	    <div>
	      <nav>
		<h1>This is the navbar</h1>
		<ul>
		  <li>
		    nav 1 
		  </li>
		  <li>
		    nav 2
		  </li>
		</ul>
	      </nav>
	      <main>
		<h1>The main component</h1>
	      </main>
	      <Footer />
	    </div>
	    
	  )
	}

	export default App;


importing the footer component inside app and rendering it

styling 
  you cannot use class to style use classname coz underneath the jsx is using vanila  js   dom api
  <h1 classname="nav"> </h1>
  add .nav {
	styling in style.css
	}
  you can apply classname only to jsx elements 
	
	style={{color: "#fff"", backgroundColor: "fgk"}}  //  this is the way to add 		iline styles
	

##  Props reusable components

	<ContactCard 
	  name="cat majic"
	  imgurl="ww.com"
	  p="this is the information"	
	/>

	// this can also be passed as an object contact={{ name: "woolcat", url: 		   "jk.com", p: "this is the information" }} inside ContactCard
	// acessing props.contacts.name
	
	function ContactCard(props) {
		return (
			<div className="conatct-card">
				<img src={props.url}/>
				<h3>{props.name}</h3>
				<p>{props.p}</p}
			</div>
		)
	}

this way you can acess the props properies 
	applying certain styles dependent on props
	<h3 style={{display: props.question ? "block" : "none" }}>
	or you can also do
	style={{display: :props.question && 'none'}}


Mapping 

	const num = [1, 2, 3, 4, 5, 8]
	const doubled = nums.map(function(num) {
		return num*2
	})

create a json file import data

	import jokesData from "./jokesData"

	function App() {
		const jokesComponents = jokesData.amp(function(joke) {
			return (
			<Joke key={joke.id} question={joke.question} />)
	return {
		<div>
			{jokesComponents}		
		</div>	 
	}	
	}


	import TodoItem from './TodoItem'
	import todoData from './todoData'
	const TodoItems = todoData.map(item => <TodoItem key={item.id} item={item} />)

	function App () {
	  return (
	    <div className="todo-list">
	      {TodoItems}
	      
	    </div>
	  )
	}

	export default App;



// the item component 

	import React from "react"

	function TodoItem (props) {
	    console.log(props)
	    return (
		<div className="todo-item">
		    <input type="checkbox" checked={props.item.completed}></input>
		    <p>{props.item.text}</p>
		</div>
	    
	    )
	}

export default TodoItem



## class based components

this gives you flexibility of mutiple situation based rendering and writing other helper fucntion to help get the job done props will be acessed using {this.props}

	class App extends React.Component {
	  
	  render() {
	    const date = new Date();
	    return (
	      <div className="todo-list">
		{TodoItems}

		
	      </div>
	    ) 
	  }
	}
	

## State 
The data that a components has. using this a component can maintian its own data and change it. only class based component can maintian state. A component can pass its state as props to its child component. if the satate of parent is changed all the childs having the state will be updated

	class App extends React.Component {
	  constructor() {
	    super()
	    this.state = {
	      answer: "yes"
	    }
	  }
	  
	  render() {
	    const date = new Date();
	    return (
	      <div className="todo-list">
		{TodoItems}
		<h1>{this.state.answer}</h1>
	      </div>
	    ) 
	  }
	}



now you will bring the json data in state and then mapp it into array and then render using the render function

	class App extends React.Component {
	  constructor() {
	    super()
	    this.state = {
	      todos: todoData

	    }
	  }
	  
	  render() {
	    const TodoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)
	    const date = new Date();
	    return (
	      <div className="todo-list">
		{TodoItems}
		<h1>{this.state.answer}</h1>
	      </div>
	    ) 
	  }
	}



## Events in react 
now we are gonna change state when an event occurs, event handlers are camel case in react. never directly modify the state. state is like clothing so you change it not modify
	this.setState({ count: 1})

	this.setStae((prevState) => {
		return {
			count: prevState.count+1		
		}	
	}))
you also need to bind it to state




	class App extends React.Component {
	  constructor() {
	    super()
	    this.state = {
	      todos: todoData
	    }
	    this.handlechange = this.handlechange.bind(this)
	  }

	  handlechange(id) {

	    this.setState(prevstate => {
	      const updatedTodos = prevstate.todos.map(todo => {
		if (todo.id === id){
		  todo.completed = !todo.completed
		}
		return todo
	      }
	      )
	     return {
	       todos: updatedTodos
	     } 
	    })
	  }

	  
	  render() {
	    const TodoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}  handlechange={this.handlechange} />)
	    const date = new Date();
	    return (
	      <div className="todo-list">
		{TodoItems}
		<h1>{this.state.answer}</h1>
	      </div>
	    ) 
	  }
	}




To do part of code


import React from "react"

	function TodoItem (props) {
	    console.log(props)
	    return (
		<div className="todo-item">
		    <input type="checkbox" checked={props.item.completed} 
		    onChange={() => props.handlechange(props.item.id)}>
		    </input>
		    <p>{props.item.text}</p>
		</div>
	    
	    )
	}

	export default TodoItem




## Life cycle events
	render()
	compodentDidMount() {}  // runs only once when component mounts
	componentWillReceiveProps(){} // run every time parent component hands porps to child ccomponent
	shouldComponentUpdate(nextProps, next){}

  



##  conditional rendering 

class App extends Component {
	constuctor() {
		super()
		this.state = {
			isLoading: true
		}
	}	

	compoentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		} , 1000)
	}
	
	render() {
		return {
			<div>
				{this.state.isLoading ? <h1>Loading.. </h1>:
				<conditional isLoading={this.state.isLoading}/> }
			</div>
		}
	}
}





## fetching data from an api
use promise and component on mount

## Forms in react

	import React, {component} from "react"

	class App extends Component {
		constructor() {
			super()
			const {name, value} = event.target
			this.state = {
				[name]: value
				firstName: "",
				lastName: ""
				}
			this.handleChange = this.handleCahnge.bind(this)
			}
	handleChange(event) {
		this.setState({
			[event.target.name] = event.target.value
		})
	}

	render() {
		return(
			<form>
				<input type="text" name="firstName" placeholder="first: name" onchange={this.handleChange} />
				<br/>
				<input type="text" name="lastName" placeholder="last:
name" onchange={this.handleChange} />
				<h1>{this.state.firstName} {this.state.lastName}</h1>
			</form>
		}
	}
}

export default App




## Routing in React

You will have to use react-router-dom for routing install it using npm,
	npm install react-router-dom --save
now import router in you project you will have to embed it between <Router> to implement routing

	import { BrowserRouter as Router} from 'react-router-dom'
	import Route from 'react-router-dom/Route'

	class App extends Component {
		render() {
			return (
				<Router>
					<div classNamw="App">
						<Route path="/" render={
												 					<h1>Welcomehome<h1>						
						}/>
					</div>
				<Router />
			);
		}
	}


	
similarly you can add route to about other pages


	<Route path="/about"  exact render={
		() => {
			return (<h1>Welcome About</h1>):
		}
	}/>

react used regex to match path so specify exact={true} you can also use scrit to make exact path.


now rendering components with routing
	const User = () => {
		return (<h1>i am the user </h1>)	
	} //created a user
	<Route path="/user"  exact 
	component={User}/>









