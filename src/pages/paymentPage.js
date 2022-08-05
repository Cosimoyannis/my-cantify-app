const PaymentPage = () => {

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









    const mystyle = {

        height: '100vh',
    
            overflowX: "hidden",
            margin:"0", 
            padding:"0",
        
      };


    return (
        <body  style={mystyle} class="">
        
        <div class="card rounded-5" style={{width: "100vw", height: "145vh", marginTop:"10vh"}}>

        
        
        <div class="card-body">


        <div class="mb-4 ms-3 mt-3">

        <h1>Checkout</h1> 

        </div>



        <div class="d-flex justify-content-around mb-4">

        <div class="card shadow me-3 ms-3">
        <div class="card-body">
        <img class="mt-1" src={paypal} style={{}} alt="" width="50"></img>
        </div>
        </div>

        <div class="card shadow me-3 ms-3">
        <div class="card-body">
        <img class="" src={card} style={{}} alt="" width="50"></img>
        </div>
        </div>

        <div class="card shadow me-3 ms-3">
        <div class="card-body">
        <img class="mt-1" src={applepay} style={{}} alt="" width="50"></img>
        </div>
        </div>

        </div>


        
        <div class="mb-4 ms-3">

        <h1>Saved Cards</h1> 

        </div>





        <div class="d-flex justify-content-evenly mt-5">

        <img class="me-3 ms-3 mb-5" src={creditcards} style={{}} alt="" width="300"></img>

        </div>




        <div class="card shadow mt-4 me-4 ms-4">
        <div class="card-body">

        <h1 class="fs-5">Card Number</h1> 
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"><img class="me-3 ms-3" src={visa} style={{}} alt="" width="40"></img></span>
        <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <h1 class="fs-5">Name on Card</h1> 
        
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Vornamen" aria-label="Username"></input>
        <input type="text" class="form-control" placeholder="Nachname" aria-label="Server"></input>
        </div>

        <h1 class="fs-5">Exp Date</h1> 

        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Date" aria-label="Username"></input>
        <input type="text" class="form-control" placeholder="CCV" aria-label="Server"></input>
        </div>
    

        </div> 
        </div>

        <div class="card shadow mt-4 me-4 ms-4">
        <div class="card-body">

        <h1 class="fs-5 mt-1 text-center">Promotion Code</h1> 
        <div class="mb-3 me-5 ms-5">
        <input type="text" class="form-control" placeholder="Code" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        </div>
        </div>



        <nav class="bg-white fixed-bottom border-top border-3 border-dark" style={{height:"40vh"}}>

              
        <div class="d-flex justify-content-between mt-5 me-5 ms-5">

        <h4 class="text-muted fw-light fs-5"> Subtotals: </h4>

        <h4 class="text-muted fw-light fs-5"> 8.99€ </h4>

        </div>


        <div class="d-flex justify-content-between  me-5 ms-5">

        <h4 class="text-muted fw-light fs-5"> Discount: </h4>

        <h4 class="text-muted fw-light fs-5"> 0.99€ </h4>
        
        </div>


        <div class="d-flex justify-content-between mt-3 me-5 ms-5">

        <h4 class="fs-1"> Total: </h4>

        <h4 class="fs-1"> 8.00€ </h4>
        
        </div>


        <div class="d-flex justify-content-center mt-4">

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal" class="btn btn-warning rounded-pill col-9 shadow">Confirm Order</button>

    
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

export default PaymentPage;