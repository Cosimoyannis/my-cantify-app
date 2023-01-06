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
    <body style={mystyle} class="">
      <div
        class="card rounded-5"
        style={{
          width: "100vw",
          height: "150vh",
          marginTop: "30vh",
          zIndex: "",
        }}
      >
        <div class="card-head mx-auto">
          <img
            class=""
            src={burger2}
            style={{ marginTop: "-15vh" }}
            alt=""
            width="300"
          ></img>
        </div>

        <div class="card-body">
          <div class="d-flex justify-content-around mb-4">
            <h1 class="my-auto mb-1"> Cheeseburger </h1>

            <h4 class="text-muted fw-light my-auto">
              {" "}
              16 left |{" "}
              <svg
                style={{ marginBottom: "1.1vw" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>{" "}
              4.5
            </h4>
          </div>

          <div class="d-flex justify-content-evenly mt-3">
            <h4 class="text-warning">
              {" "}
              <img
                class="mb-2 me-3"
                src={burgericon}
                style={{}}
                alt=""
                width="25"
              ></img>{" "}
              Burger{" "}
            </h4>

            <h4 class="text-muted"> | </h4>

            <h4 class="text-muted"> vegan </h4>

            <h4 class="text-muted"> | </h4>

            <h4 class="text-muted"> 989kcal </h4>
          </div>

          <div class="d-flex justify-content-evenly mt-5">
            <button
              id="btn"
              href="/home"
              class="btn btn-outline-secondary rounded-pill shadow fs-5"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-dash me-2"
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
                class="bi bi-plus ms-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>{" "}
            </button>

            <h1 class="mt-1">
              {" "}
              10.98€{" "}
              <a
                class="fs-5 text-muted fw-light"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                /a piece
              </a>{" "}
            </h1>
          </div>

          <div class="d-flex justify-content-evenly mt-5">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modal"
              class="btn btn-warning rounded-pill col-9"
            >
              Add to cart
            </button>
          </div>

          <div class="d-flex justify-content-center mt-5">
            <img
              class="mb-2 me-3"
              src={facts}
              style={{}}
              alt=""
              width="100%"
            ></img>
          </div>

          <div class="modal" tabindex="-1" id="modal">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <h1 class="modal-title text-center mb-4">Success!</h1>

                  <p>
                    Du hast 2x Pizza Magharita deinem Warenkorb hinzugefügt.
                  </p>
                </div>
                <div class="modal-footer mx-auto">
                  <button
                    type="button"
                    class="btn btn-warning"
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
    </body>
  );
};

export default MealOverviewPage;
