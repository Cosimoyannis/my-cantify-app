import React, {useState, useEffect } from "react"
import axios from "axios"
import DateSelectionPage from "./dateSelectionPage"
import { display } from "@mui/system";








    const img = require('../images/iconback.png');
    const logo = require('../images/cantify_freshways.png');
    const burger2 = require('../images/burger2.png');
    const burgericon = require('../images/burgericon.png');
    const facts = require('../images/facts.png');
    const paypal = require('../images/paypal.png');
    const card = require('../images/card.png');
    const applepay = require('../images/applepay.png');
    const creditcards = require('../images/creditcards.png');
    const visa = require('../images/visa.png');



const pizza = require('../images/pizza.jpeg');

const burger = require('../images/burger.jpeg');

const ad = require('../images/ad.jpeg');

const ad2 = require('../images/ad2.png');











    const mystyle = {

        height: '100vh',
    
            overflowX: "hidden",
            margin:"0", 
            padding:"0",
        
      };


      function ShoppingCartPage() {

        
        const url ='https://jsonplaceholder.typicode.com/users'
        const [users, setUsers] = useState(null)

        
        const [navbar, setNavbar] = useState(false)
  
        const changeNavbar = () => {
          if (window.scrollY >= 40 ) {
            setNavbar(true);
          } else {
            setNavbar(false);
          }
        };

        window.addEventListener('scroll', changeNavbar);



    



        useEffect(() => {

          


        
          axios.get(url).then(response => {
            setUsers(response.data)
        
        })
         
        }, [url])  
        
        
        if(users){ 
            return (
        <body  style={mystyle} class="">
        
        <div class="card rounded-5" style={{width: "100vw", height: "300vh", marginTop:"10vh"}}>

        
        
        <div class="card-body">


        <div class="mb-4 ms-3 mt-3">

        <h1>Your Shopping Cart</h1> 

        </div>


        

      





        <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-4 px-2" style={{
      overflowX: "hidden",
      height: "100wh",
      margin:"0", 
      padding:"0",
      }}>


    
    
    
      <a href="/mealOverviewPage" style={{color:"inherit", textDecoration:"none" }} >
        <div class="col">
          <div class="card h-100 shadow flex-row text-start" >

        
          <img class="col align-self-center" src={burger} style={{marginLeft: "5vw"}} alt="" width="100" height=""></img>

            <div class="card-body col align-self-center" style={{marginLeft: "5vw"}}>
              <h5 class="card-title"><b>{users[1].name}</b></h5>
              <h5 class="text-muted fw-light fs-6"> 16 left | <svg style={{marginBottom: "1.1vw"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg> 4.5 </h5>
              <h5>10.99€</h5>
              
            </div>

            <div class="align-self-end">
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: "2vw", marginRight: "2vw"}} width="20" height="20" fill="orange" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            </div>
        
          </div>

        </div>
      </a>
    


      <a href="/mealOverviewPage" style={{color:"inherit", textDecoration:"none" }} >
        <div class="col">

          <div class="card h-100 shadow flex-row" >

        
          <img class="col align-self-center" src={pizza} style={{marginLeft: "5vw"}} alt="" width="100" height=""></img>

            <div class="card-body col align-self-center" style={{marginLeft: "5vw"}}>
              <h5 class="card-title"><b>{users[1].name}</b></h5>
              <h5 class="text-muted fw-light fs-6"> 16 left | <svg style={{marginBottom: "1.1vw"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg> 4.5 </h5>
              <h5>10.99€</h5>
              
            </div>

            <div class="align-self-end">
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: "2vw", marginRight: "2vw"}} width="20" height="20" fill="orange" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            </div>
        
          </div>

        </div>
      </a>
    
    
    
      <a href="/mealOverviewPage" style={{color:"inherit", textDecoration:"none" }} >
        <div class="col">
          <div class="card h-100 shadow flex-row text-start" >

        
          <img class="col align-self-center" src={burger} style={{marginLeft: "5vw"}} alt="" width="100" height=""></img>

            <div class="card-body col align-self-center" style={{marginLeft: "5vw"}}>
              <h5 class="card-title"><b>{users[1].name}</b></h5>
              <h5 class="text-muted fw-light fs-6"> 16 left | <svg style={{marginBottom: "1.1vw"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg> 4.5 </h5>
              <h5>10.99€</h5>
              
            </div>

            <div class="align-self-end">
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: "2vw", marginRight: "2vw"}} width="20" height="20" fill="orange" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            </div>
        
          </div>

        </div>
      </a>

         


      <a href="/mealOverviewPage" style={{color:"inherit", textDecoration:"none" }} >
        <div class="col">

          <div class="card h-100 shadow flex-row" >

        
          <img class="col align-self-center" src={pizza} style={{marginLeft: "5vw"}} alt="" width="100" height=""></img>

            <div class="card-body col align-self-center" style={{marginLeft: "5vw"}}>
              <h5 class="card-title"><b>{users[1].name}</b></h5>
              <h5 class="text-muted fw-light fs-6"> 16 left | <svg style={{marginBottom: "1.1vw"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg> 4.5 </h5>
              <h5>10.99€</h5>
              
            </div>

            <div class="align-self-end">
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: "2vw", marginRight: "2vw"}} width="20" height="20" fill="orange" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            </div>
        
          </div>

        </div>
      </a>
    
    
    
    
      
    
    
    
    
    
    
     
    
     
    
    
              
       
    
    
            
              
    
    
              
              
    
    
              
        
    
    
        <div>
          <a style={{color:"white"}}>
        . <br/> . <br/> .
        </a>
          </div>
    
    
      </div>
        




        







        <nav class= "bg-white fixed-bottom border-top border-3 border-dark"  style={navbar ? {height:"1vh"} : {height:"42vh"} }>

              
        <div class="d-flex justify-content-between mt-5 me-5 ms-5">

        <h4 class="text-muted fw-light"> Subtotals: </h4>

        <h4 class="text-muted fw-light"> 8.99€ </h4>

        </div>


        <div class="d-flex justify-content-between  me-5 ms-5">

        <h4 class="text-muted fw-light"> Discount: </h4>

        <h4 class="text-muted fw-light"> 0.00€ </h4>
        
        </div>


        <div class="d-flex justify-content-between mt-3 me-5 ms-5">

        <h4 class="fs-1"> Total: </h4>

        <h4 class="fs-1"> 8.99€ </h4>
        
        </div>


        <div class="d-flex justify-content-center mt-4">

        <a href="/paymentPage" class="btn btn-warning rounded-pill col-9 shadow">Checkout</a>
    
        </div>

                
         </nav>

        


    


        <div class="modal" tabindex="-1" id="modal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <h1 class="modal-title text-center mb-4">Success!</h1>

        <p>Du hast 2x Pizza Magharita deinem 
            Warenkorb hinzugefügt. 
        </p>
      </div>
      <div class="modal-footer mx-auto">
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Go to cart</button>
      </div>
    </div>
  </div>
</div>





        </div>

      




        

       </div>

       

       

        </body>
 );
    
}
return (

<div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    
    
       
      )
    
    }
    
    export default ShoppingCartPage;