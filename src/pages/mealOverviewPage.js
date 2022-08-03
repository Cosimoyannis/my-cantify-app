const MealOverviewPage = () => {

    const img = require('../images/iconback.png');
    const logo = require('../images/cantify_freshways.png');
    const burger2 = require('../images/burger2.png');

    const mystyle = {

        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
        backgroundImage: `url(${img})`,
    
            overflowX: "hidden",
            margin:"0", 
            padding:"0",
        

        
      };


    return (
        <body  style={mystyle} class="">
        
        <div class="card rounded-5" style={{width: "100vw", height: "80vh", marginTop:"30vh"}}>

        <div class="card-body mx-auto">

        <img class="" src={burger2} style={{marginTop: "-16vh"}} alt="" width="300"></img>





        </div>

       </div>

       

       

        </body>
    );
}

export default MealOverviewPage;