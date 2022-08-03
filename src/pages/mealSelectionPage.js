import React, {useState, useEffect } from "react"
import axios from "axios"
import DateSelectionPage from "./dateSelectionPage"

const pizza = require('../images/pizza.jpeg');

const burger = require('../images/burger.jpeg');

const ad = require('../images/ad.jpeg');

const ad2 = require('../images/ad2.png');


function Home() {

 
    const url ='https://jsonplaceholder.typicode.com/users'
    const [users, setUsers] = useState(null)
    
    useEffect(() => {
    
      axios.get(url).then(response => {
        setUsers(response.data)
    
    })
     
    }, [url])  
    
    
    if(users){ 
        return (
    
          
    
          <div>
        
        <div>
          <a style={{color:"white"}}>
        . <br/> . <br/> .
        </a>
          </div>
          
          
          
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-4 px-4" style={{
      overflowX: "hidden",
      height: "100wh",
      margin:"0", 
      padding:"0",
      }}>


    
      <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
        <div class="col">

          <div class="card h-100 shadow flex-row" style={{backgroundColor: "#FFC529"}}  >

        
          <img class="col align-self-center" src={ad2} style={{marginLeft: "4vw"}} alt="" width="100" height=""></img>

            <div class="card-body col align-self-center" style={{marginLeft: ""}}>
              <h5 class="card-title " style={{color: "#C65A39"}}><b>Today is <br />Pizza-Day!</b></h5>
              <h5 class=" fw-light fs-6"> Enter the code PIZZA at checkout and <br />save 10% </h5>
              
            </div>
        
          </div>

        </div>
      </a>
    
    
    
      <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
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
    


      <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
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
    
    
    
      <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
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

      <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
        <div class="col">

          <div class="card h-100 shadow flex-row" >

        
          <img class="col align-self-center" src={pizza} style={{marginLeft: "5vw"}} alt="" width="100" height=""></img>

            <div class="card-body col align-self-center" style={{marginLeft: "5vw"}}>
              <h5 class="card-title"><b>{users[0].name}</b></h5>
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
    
    
    
      <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
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
    
    
      
    
    
    
    
    
    
     
    
     
    
    
              
       
    
    
            
              
    
    
              
              
    
    
              
        
    
    
        <div>
          <a style={{color:"white"}}>
        . <br/> . <br/> .
        </a>
          </div>
    
    
      </div>
            
            
          
            
         
            
       
      
            
            
            
            
            
            
            
          
         
            
            
            
            
            
            
            
            
             <nav class="navbar bg-white fixed-top rounded-pill py-4 shadow">
              
        <div class="container d-flex justify-content-around">
          <a class="navbar-brand" href="/">
            <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/pngwing.com%20(4).png?v=1656781464561" alt="" width="40" height="40"></img>
          </a>
           <a class="navbar-brand" href="/about">
          </a>
           <a class="navbar-brand" href="/MensaSelectionPage">
          </a>
           <a class="navbar-brand" href="/">
            <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/bell_orange.png?v=1656865820884" alt="" width="24" height="24"></img>
          </a>
        </div>  
                
      </nav>
            
            
            
            
            
      </div>
        
            
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
    
    export default Home;