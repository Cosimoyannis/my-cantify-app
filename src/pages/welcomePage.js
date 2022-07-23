const Welcomepage = () => {

    const img = require('../images/welcomePage.jpg');
    const logo = require('../images/cantify_freshways.png');

    const mystyle = {

        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '110vw',
        height: '100vh',
        backgroundImage: `url(${img})`,
        
      };


    return (
        <body  style={mystyle} class="row align-items-center">
        
       

        <div class="">
        <img src={logo} alt="" width="150" height="150"></img>
        </div>


        <div>
        <h1 style={{color: "white", font:"Roboto"}}> 
             Be a part of Cantify <br/>
             spend more time with  <br/>
             friends and less with  <br/>
             standing in queue</h1>
        </div>


        <div class="d-grid gap-2 col-8 mx-auto ">
        <button class="btn btn-warning rounded-pill" href="/welcomepage">Log in</button>
        <button class="btn btn-warning rounded-pill">Register</button>
        </div>

       

        </body>
    );
}

export default Welcomepage;