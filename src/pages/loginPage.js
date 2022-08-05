const loginPage = () => {

    const img = require('../images/welcomePage.jpg');
    const logo = require('../images/cantify_freshways.png');

    const mystyle = {

    
        height: '100vh',
    
    
            overflowX: "hidden",
            margin:"0", 
            padding:"0",

        
      };


    return (
        <body  style={mystyle} class="row align-items-center">
        
       

        <div class="d-flex justify-content-center" >
        <img src={logo} alt="" width="150" height="150"></img>
        </div>


        <div class="d-grid gap-2 col-8 mx-auto ">
        <h1 class="mx-auto" style={{fontSize:"23pt"}}>Welcome back!</h1>
	    <h5 class="text-muted fs-4 fw-light mx-auto">Login to continue</h5>
        </div>


        <div class="d-grid gap-2 col-8 mx-auto ">
        <div class="form-group mb-2">
            <input type="email" class="form-control rounded-pill shadow" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
        </div>
        <div class="form-group">
            <input type="email" class="form-control rounded-pill shadow" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password"></input>
        </div>
        </div>


        <div class="d-grid gap-2 col-8 mx-auto ">
        <a href="/home" class="btn btn-warning rounded-pill shadow">Log in</a>
        </div>

       

        </body>
    );
}

export default loginPage;