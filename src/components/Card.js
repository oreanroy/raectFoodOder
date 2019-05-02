import React from "react"

function Card () {
    return (
        <div className="row myrow col-12">
             <div class="col-3 mycard">
        <div class="card mycardin" >
            <p>Black burger  </p>
            <img src="https://timedotcom.files.wordpress.com/2015/09/black-burger-king-halloween-whopper.jpg"/>
            <p>calculated on </p>
            <button type="button" class="btn btn-primary pass-button" >Add to cart</button>
            <button type="button" class="btn btn-primary fail-button" >Remove</button>
        </div>
    </div>

        </div>
    )
}


export default Card