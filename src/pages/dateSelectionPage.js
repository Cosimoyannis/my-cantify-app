function DateSelectionPage() {

	const mystyle = {
       height: "100vh",
      };


let current_datetime = new Date();

let formatted_date = current_datetime.getDate() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear();

return (



    
	<body style={mystyle}  class= "text-center row align-items-center">
        
       
	<div class="">

	<h1 class=" fs-1">Wähle das Datum</h1>
	<h5 class="text-muted fs-6 fw-light">an dem du essen gehen möchtest</h5>




	<div class="dropdown mt-5 d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-secondary dropdown-toggle btn-warning rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {formatted_date}
  </button>
  <ul class="dropdown-menu ">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

</div>

   

	</body>
	
		



       

        



)


}

export default DateSelectionPage;