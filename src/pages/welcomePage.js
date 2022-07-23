const Welcomepage = () => {

    const img = require('../images/welcomePage.jpg');
    const logo = require('../images/cantify_freshways.png');

    const mystyle = {

        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        backgroundImage: `url(${img})`,
    
            overflowX: "hidden",
            margin:"0", 
            padding:"0",

        
      };


    return (
        <body  style={mystyle} class="row align-items-center">
        
       

        <div class="d-flex justify-content-center" >
        <img src={logo} alt="" width="150" height="150"></img>
        </div>


        <div class="d-flex justify-content-center">
        <h1 style={{color: "white", font:"Roboto"}} class="text-center"> 
             Be a part of Cantify <br/>
             spend more time with  <br/>
             friends and less with  <br/>
             standing in queue</h1>
        </div>


        <div class="d-grid gap-2 col-8 mx-auto ">
        <a href="/home" class="btn btn-warning rounded-pill">Log in</a>
        <a href="/home" class="btn btn-warning rounded-pill">Register</a>
        </div>

       

        </body>
    );
}

export default Welcomepage;