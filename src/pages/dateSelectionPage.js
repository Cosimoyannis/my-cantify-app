function DateSelectionPage() {

	const mystyle = {
       height: "100vh",
      };


let current_datetime = new Date();

let formatted_date = current_datetime.getDate() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear();

let date1 = current_datetime.getDate() + 1 + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear();

let date2 = current_datetime.getDate() + 2 + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear();

let date3 = current_datetime.getDate() + 3 + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear();


return (



    
	<body style={mystyle}  class= "text-center row align-items-center">
        
       
	<div class="">

	<h1 class="" style={{fontSize:"23pt"}}>Wähle das Datum</h1>
	<h5 class="text-muted fs-6 fw-light">an dem du essen gehen möchtest</h5>




	<div class="dropdown mt-5 d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-secondary dropdown-toggle btn-warning rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {formatted_date}
  </button>
  <ul class="dropdown-menu ">
    <li><a class="dropdown-item" href="/mealSelectionPage">{date1}</a></li>
    <li><a class="dropdown-item" href="#">{date2}</a></li>
    <li><a class="dropdown-item" href="#">{date3}</a></li>
  </ul>
</div>

</div>

   

	</body>
	
		



       

        



)


}

export default DateSelectionPage;