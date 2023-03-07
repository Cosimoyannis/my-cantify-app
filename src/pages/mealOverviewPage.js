const MealOverviewPage = () => {
  const img = require("../images/iconback.png");
  const logo = require("../images/cantify_freshways.png");
  const burger2 = require("../images/burger2.png");
  const burgericon = require("../images/burgericon.png");
  const facts = require("../images/facts.png");

  const mystyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundImage: `url(${img})`,
    overflowX: "hidden",
    margin: "0",
    padding: "0",
  };

  return (
    <div style={mystyle} className="">
      <div
        className="card rounded-5"
        style={{
          width: "100vw",
          height: "150vh",
          marginTop: "30vh",
          zIndex: "",
        }}
      >
        <div className="card-head mx-auto">
          <img
            className=""
            src={burger2}
            style={{ marginTop: "-15vh" }}
            alt=""
            width="300"
          ></img>
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-around mb-4">
            <h1 className="my-auto mb-1"> Cheeseburger </h1>

            <h4 className="text-muted fw-light my-auto">
              {" "}
              16 left |{" "}
              <svg
                style={{ marginBottom: "1.1vw" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>{" "}
              4.5
            </h4>
          </div>

          <div className="d-flex justify-content-evenly mt-3">
            <h4 className="text-warning">
              {" "}
              <img
                className="mb-2 me-3"
                src={burgericon}
                style={{}}
                alt=""
                width="25"
              ></img>{" "}
              Burger{" "}
            </h4>

            <h4 className="text-muted"> | </h4>

            <h4 className="text-muted"> vegan </h4>

            <h4 className="text-muted"> | </h4>

            <h4 className="text-muted"> 989kcal </h4>
          </div>

          <div className="d-flex justify-content-evenly mt-5">
            <button
              id="btn"
              href="/home"
              className="btn btn-outline-secondary rounded-pill shadow fs-5"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-dash me-2"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>{" "}
              1{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-plus ms-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>{" "}
            </button>

            <h1 className="mt-1">
              {" "}
              10.98€{" "}
              <a
                className="fs-5 text-muted fw-light"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                /a piece
              </a>{" "}
            </h1>
          </div>

          <div className="d-flex justify-content-evenly mt-5">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modal"
              className="btn btn-warning rounded-pill col-9"
            >
              Add to cart
            </button>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <img
              className="mb-2 me-3"
              src={facts}
              style={{}}
              alt=""
              width="100%"
            ></img>
          </div>

          <div className="modal" tabindex="-1" id="modal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h1 className="modal-title text-center mb-4">Success!</h1>

                  <p>
                    Du hast 2x Pizza Magharita deinem Warenkorb hinzugefügt.
                  </p>
                </div>
                <div className="modal-footer mx-auto">
                  <button
                    type="button"
                    className="btn btn-warning"
                    data-bs-dismiss="modal"
                  >
                    Go to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealOverviewPage;
