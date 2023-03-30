import React from 'react'

export default function product(props) {
    const {product} = props;
  return (
    

      


      <a href="" style={{color:"inherit", textDecoration:"none" }} >
        <div class="col">
          <div class="card h-100 shadow flex-row text-start" >

        
          <img class="col align-self-center" src={product.image} style={{marginLeft: "5vw"}} alt="" width="100" height=""></img>

            <div class="card-body col align-self-center" style={{marginLeft: "5vw"}}>
              <h5 class="card-title"><b>{product.name}</b></h5>
              <h5 class="text-muted fw-light fs-6"> 16 left | <svg style={{marginBottom: "1.1vw"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg> 4.5 </h5>
              <h5>{product.price}€</h5>
              
            </div>

            <div class="align-self-end">
            <button type="button" style={{marginBottom: "2vw", marginRight: "2vw"}} class="btn btn-outline-warning rounded-circle" >+</button>
            </div>
        
          </div>

        </div>
      </a>


    
  )
}
