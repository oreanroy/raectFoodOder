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
    console.log(props)
    console.log("i ran")
    return (
        
                    <div class="col-3 mycard">
                       <div class="card mycardin" >

                           <p>{props.item.name}</p>
                           <img src={props.item.url}/>
                           <p>{props.item.detail} </p>
                           <p> ingridients: {props.item.ingridients}</p>
                           <button type="button" class="btn btn-primary pass-button" >Add to cart</button>
                           <button type="button" class="btn btn-primary fail-button" >Remove</button>
                       </div>
                    </div>
                
        
    )
}


export default Body