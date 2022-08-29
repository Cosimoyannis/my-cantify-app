const Navbar = () => {
    return (

     <nav class="navbar bg-white fixed-bottom rounded-pill py-4 shadow">
              
        <div class="container d-flex justify-content-evenly">
          <a class="navbar-brand" href="/mealSelectionPage">
            <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/home_orange.png?v=1656865821277" alt="" width="30" height="30"></img>
          </a>
           <a class="navbar-brand" href="/mealSelectionPage">
            <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/heart_orange.png?v=1656865820935" alt="" width="24" height="24"></img>
          </a>
           <a class="navbar-brand" href="/mealSelectionPage">
            <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/search_orange.png?v=1656865821143" alt="" width="30" height="30"></img>
          </a>
          <a class="navbar-brand" href="/shoppingcartPage">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#FFC529" class="bi bi-bag-fill mb-1" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
            </svg>
            </a>
        </div>  
                
      </nav>
    );
}

export default Navbar;