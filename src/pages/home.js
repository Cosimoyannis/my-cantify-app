import React, {useState, useEffect } from "react"
import axios from "axios"
import DateSelectionPage from "./dateSelectionPage"


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
      
      
      
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-4 px-2" style={{
  overflowX: "hidden",
  height: "100wh",
  margin:"0", 
  padding:"0",
  }}>

  <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >

    <div class="col">
      <div class="card h-100 shadow d-flex flex-row" >
        <div class="card-body ">
          <h5 class="card-title"><b>{users[0].name}</b></h5>
          <div class="d-flex justify-content-between">
            <p class="card-text">{users[1].address.street} <br></br> {users[1].address.zipcode} <br></br> Offen bis: 18 Uhr</p>
          </div>
        </div>

        <div class="col align-self-center text-end" style={{margin:"5vw"}}>
        <a href="/home" class="btn btn-warning rounded-pill">700m</a>
        </div>

      </div>
    </div>
  </a>



  <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
    <div class="col">
      <div class="card h-100 shadow d-flex flex-row">
        <div class="card-body ">
          <h5 class="card-title"><b>{users[2].name}</b></h5>
          <div class="d-flex justify-content-between">
            <p class="card-text">{users[2].address.street} <br></br> {users[2].address.zipcode} <br></br> Offen bis: 18 Uhr</p>
          </div>
        </div>

        <div class="col align-self-center text-end" style={{margin:"5vw"}}>
        <a href="/home" class="btn btn-warning rounded-pill">700m</a>
        </div>

      </div>
    </div>
  </a>



  <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
    <div class="col">
      <div class="card h-100 shadow d-flex flex-row">
        <div class="card-body ">
          <h5 class="card-title"><b>{users[3].name}</b></h5>
          <div class="d-flex justify-content-between">
            <p class="card-text">{users[3].address.street} <br></br> {users[3].address.zipcode} <br></br> Offen bis: 18 Uhr</p>
          </div>
        </div>

        <div class="col align-self-center text-end" style={{margin:"5vw"}}>
        <a href="/home" class="btn btn-warning rounded-pill">700m</a>
        </div>

      </div>
    </div>
  </a>



  <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
    <div class="col">
      <div class="card h-100 shadow d-flex flex-row">
        <div class="card-body ">
          <h5 class="card-title"><b>{users[4].name}</b></h5>
          <div class="d-flex justify-content-between">
            <p class="card-text">{users[4].address.street} <br></br> {users[4].address.zipcode} <br></br> Offen bis: 18 Uhr</p>
          </div>
        </div>

        <div class="col align-self-center text-end" style={{margin:"5vw"}}>
        <a href="/home" class="btn btn-warning rounded-pill">700m</a>
        </div>

      </div>
    </div>
  </a>



  <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
    <div class="col">
      <div class="card h-100 shadow d-flex flex-row">
        <div class="card-body ">
          <h5 class="card-title"><b>{users[5].name}</b></h5>
          <div class="d-flex justify-content-between">
            <p class="card-text">{users[5].address.street} <br></br> {users[5].address.zipcode} <br></br> Offen bis: 18 Uhr</p>
          </div>
        </div>

        <div class="col align-self-center text-end" style={{margin:"5vw"}}>
        <a href="/home" class="btn btn-warning rounded-pill">700m</a>
        </div>

      </div>
    </div>
  </a>



  <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
    <div class="col">
      <div class="card h-100 shadow d-flex flex-row">
        <div class="card-body ">
          <h5 class="card-title"><b>{users[6].name}</b></h5>
          <div class="d-flex justify-content-between">
            <p class="card-text">{users[6].address.street} <br></br> {users[6].address.zipcode} <br></br> Offen bis: 18 Uhr</p>
          </div>
        </div>

        <div class="col align-self-center text-end" style={{margin:"5vw"}}>
        <a href="/home" class="btn btn-warning rounded-pill">700m</a>
        </div>

      </div>
    </div>
  </a>


  <a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >

<div class="col">
  <div class="card h-100 shadow d-flex flex-row" >
    <div class="card-body ">
      <h5 class="card-title"><b>{users[0].name}</b></h5>
      <div class="d-flex justify-content-between">
        <p class="card-text">{users[1].address.street} <br></br> {users[1].address.zipcode} <br></br> Offen bis: 18 Uhr</p>
      </div>
    </div>

    <div class="col align-self-center text-end" style={{margin:"5vw"}}>
    <a href="/home" class="btn btn-warning rounded-pill">700m</a>
    </div>

  </div>
</div>
</a>



<a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
<div class="col">
  <div class="card h-100 shadow d-flex flex-row">
    <div class="card-body ">
      <h5 class="card-title"><b>{users[2].name}</b></h5>
      <div class="d-flex justify-content-between">
        <p class="card-text">{users[2].address.street} <br></br> {users[2].address.zipcode} <br></br> Offen bis: 18 Uhr</p>
      </div>
    </div>

    <div class="col align-self-center text-end" style={{margin:"5vw"}}>
    <a href="/home" class="btn btn-warning rounded-pill">700m</a>
    </div>

  </div>
</div>
</a>



<a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
<div class="col">
  <div class="card h-100 shadow d-flex flex-row">
    <div class="card-body ">
      <h5 class="card-title"><b>{users[3].name}</b></h5>
      <div class="d-flex justify-content-between">
        <p class="card-text">{users[3].address.street} <br></br> {users[3].address.zipcode} <br></br> Offen bis: 18 Uhr</p>
      </div>
    </div>

    <div class="col align-self-center text-end" style={{margin:"5vw"}}>
    <a href="/home" class="btn btn-warning rounded-pill">700m</a>
    </div>

  </div>
</div>
</a>



<a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
<div class="col">
  <div class="card h-100 shadow d-flex flex-row">
    <div class="card-body ">
      <h5 class="card-title"><b>{users[4].name}</b></h5>
      <div class="d-flex justify-content-between">
        <p class="card-text">{users[4].address.street} <br></br> {users[4].address.zipcode} <br></br> Offen bis: 18 Uhr</p>
      </div>
    </div>

    <div class="col align-self-center text-end" style={{margin:"5vw"}}>
    <a href="/home" class="btn btn-warning rounded-pill">700m</a>
    </div>

  </div>
</div>
</a>



<a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
<div class="col">
  <div class="card h-100 shadow d-flex flex-row">
    <div class="card-body ">
      <h5 class="card-title"><b>{users[5].name}</b></h5>
      <div class="d-flex justify-content-between">
        <p class="card-text">{users[5].address.street} <br></br> {users[5].address.zipcode} <br></br> Offen bis: 18 Uhr</p>
      </div>
    </div>

    <div class="col align-self-center text-end" style={{margin:"5vw"}}>
    <a href="/home" class="btn btn-warning rounded-pill">700m</a>
    </div>

  </div>
</div>
</a>



<a href="/dateselectionpage" style={{color:"inherit", textDecoration:"none" }} >
<div class="col">
  <div class="card h-100 shadow d-flex flex-row">
    <div class="card-body ">
      <h5 class="card-title"><b>{users[6].name}</b></h5>
      <div class="d-flex justify-content-between">
        <p class="card-text">{users[6].address.street} <br></br> {users[6].address.zipcode} <br></br> Offen bis: 18 Uhr</p>
      </div>
    </div>

    <div class="col align-self-center text-end" style={{margin:"5vw"}}>
    <a href="/home" class="btn btn-warning rounded-pill">700m</a>
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