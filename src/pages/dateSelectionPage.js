function DateSelectionPage() {
  const mystyle = {
    height: "100vh",
  };

  let current_datetime = new Date();

  let formatted_date =
    current_datetime.getDate() +
    "/" +
    (current_datetime.getMonth() + 1) +
    "/" +
    current_datetime.getFullYear();

  let date1 =
    current_datetime.getDate() +
    1 +
    "/" +
    (current_datetime.getMonth() + 1) +
    "/" +
    current_datetime.getFullYear();

  let date2 =
    current_datetime.getDate() +
    2 +
    "/" +
    (current_datetime.getMonth() + 1) +
    "/" +
    current_datetime.getFullYear();

  let date3 =
    current_datetime.getDate() +
    3 +
    "/" +
    (current_datetime.getMonth() + 1) +
    "/" +
    current_datetime.getFullYear();

  return (
    <div style={mystyle} className="text-center row align-items-center">
      <div className="">
        <h1 className="" style={{ fontSize: "23pt" }}>
          Wähle das Datum
        </h1>
        <h5 className="text-muted fs-6 fw-light">an dem du essen gehen möchtest</h5>

        <div className="dropdown mt-5 d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-secondary dropdown-toggle btn-warning rounded-pill"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {formatted_date}
          </button>
          <ul className="dropdown-menu ">
            <li>
              <a className="dropdown-item" href="/mealSelectionPage">
                {date1}
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {date2}
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {date3}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DateSelectionPage;
