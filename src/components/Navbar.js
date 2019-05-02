import React from "react"
import { whileStatement } from "@babel/types";

function Navbar (props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Burger Queen</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" onClick={() => props.displayAll()}>All items <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter on category
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#" onClick={() => props.filterCategory("burger")}>Burger</a>
                                <a class="dropdown-item" href="#" onClick={() => props.filterCategory("pizza")}>Pizza</a>
                                <a class="dropdown-item" href="#" onClick={() => props.filterCategory("snacks")}>Snacks</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                Filter on Price

                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#" defaultValue="20" onClick={() => props.filterPrice(20)}>less than 20 $</a>
                                <a class="dropdown-item" href="#" defaultValue="30" onClick={() => props.filterPrice(30)}>less than 30 $</a>
                                <a class="dropdown-item" href="#" defaultValue="40" onClick={() => props.filterPrice(40)}>less than 40 $</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter on Rating
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#" onClick={() => props.filterRating(4)}>greater than 4</a>
                                <a class="dropdown-item" href="#" onClick={() => props.filterRating(3)}>greater than 3</a>
                                <a class="dropdown-item" href="#" onClick={() => props.filterRating(1)}>any</a>
                            </div>
                        </li>
                    </ul>
                </div>
                {console.log(props.inCart)}
                {!props.inCart ? <div style={{color: "#fff"}}><a>Empty </a><i class="fa fa-shopping-cart" aria-hidden="true" ></i></div>
                :<a style={{color: "#fff"}}>Checkout</a>}
            </nav>
        </div>
    )
}


export default Navbar