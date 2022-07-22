const Navbar = () => {
    return (

     <nav class="navbar bg-white fixed-bottom rounded-pill py-4 shadow">
              
        <div class="container d-flex justify-content-evenly">
          <a class="navbar-brand" href="/">
            <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/home_orange.png?v=1656865821277" alt="" width="30" height="30"></img>
          </a>
           <a class="navbar-brand" href="/welcomepage">
            <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/heart_orange.png?v=1656865820935" alt="" width="24" height="24"></img>
          </a>
           <a class="navbar-brand" href="/welcomepage">
            <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/search_orange.png?v=1656865821143" alt="" width="30" height="30"></img>
          </a>
           <a class="navbar-brand" href="/welcomepage">
            <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/orders_orange.png?v=1656865821199" alt="" width="24" height="24"></img>
          </a>
        </div>  
                
      </nav>
    );
}

export default Navbar;