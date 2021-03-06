import React from "react"
import Card from "./Card"

//function Body () {
//    return (
//        <div>
//            <div className="container">
//                <Card />
//            </div>
//        </div>
//    )
//}

function Body (props) {
    //console.log(props)
    //console.log("i ran")
    return (
        
                    <div class="col-10 mycard col-sm-10 col-md-3 col-lg-3 col-xl-3">
                       <div class="card mycardin" >

                           <h5>{props.item.name}</h5>
                           <img src={props.item.url}/>
                           <p>{props.item.detail} </p>
                           <p> ingridients: {props.item.ingridients}</p>
                           <p>Rating: {props.item.rating}</p>
                           <p>Price:  <strong>{props.item.price} $</strong></p>
                           <p>In cart: {props.item.count} </p>
                           <button type="button" class="btn btn-primary pass-button" onClick={() => props.addToCart(props.item.id)}>Add to cart</button>
                           <button type="button" class="btn btn-primary fail-button" onClick={() => props.removeFromCart(props.item.id)}>Remove</button>
                       </div>
                    </div>
                
        
    )
}


export default Body