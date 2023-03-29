import React, { useState, useEffect } from "react";
import { loadShoppingCart } from "../helper/shoppingCard";
import MealCard from "../components/mealCard";
import eventBus from "../helper/eventBus";
const mystyle = {
  height: "100vh",

  overflowX: "hidden",
  margin: "0",
  padding: "0",
};

function ShoppingCartPage() {
  const [navbar, setNavbar] = useState(false);
  const [meals, setMeals] = useState([]);
  const [subtotal, setSubtotal] = useState("0.00");
  const [discount, setDiscount] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  const changeNavbar = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const reloadShoppingCart = () => {
    const shoppingCard = loadShoppingCart();
    let totalPrice = 0;
    let studentPrice = 0;

    for (const entry of shoppingCard) {
      totalPrice += entry.prices.others;
      studentPrice += entry.prices.students;
    }

    setSubtotal(totalPrice.toFixed(2));
    setDiscount((totalPrice - studentPrice).toFixed(2));
    setTotal(studentPrice.toFixed(2));

    setMeals(shoppingCard);
  };

  useEffect(() => {
    eventBus.on("remove-shopping-card", (data) => reloadShoppingCart());
    reloadShoppingCart();
  }, []);

  window.addEventListener("scroll", changeNavbar);

  return (
    <div style={mystyle} className="">
      <div
        className="card rounded-5"
        style={{ width: "100vw", height: "300vh", marginTop: "10vh" }}
      >
        <div className="card-body">
          <div className="mb-4 ms-3 mt-3">
            <h1>Your Shopping Cart</h1>
          </div>

          <div
            className="row row-cols-1 row-cols-md-3 g-4 mt-4 px-2"
            style={{
              overflowX: "hidden",
              height: "100wh",
              margin: "0 0 50vh 0",
              padding: "0",
            }}
          >
            {meals.map((m, i) => (
              <div>
                <MealCard meal={m} key={m.id} btn={false} del={true} idx={i} />
              </div>
            ))}
          </div>

          <nav
            className="bg-white fixed-bottom border-top border-3 border-dark"
            style={navbar ? { height: "1vh" } : { height: "42vh" }}
          >
            <div className="d-flex justify-content-between mt-5 me-5 ms-5">
              <h4 className="text-muted fw-light"> Subtotals: </h4>

              <h4 className="text-muted fw-light"> {subtotal}€ </h4>
            </div>

            <div className="d-flex justify-content-between  me-5 ms-5">
              <h4 className="text-muted fw-light"> Discount: </h4>

              <h4 className="text-muted fw-light"> {discount}€ </h4>
            </div>

            <div className="d-flex justify-content-between mt-3 me-5 ms-5">
              <h4 className="fs-1"> Total: </h4>

              <h4 className="fs-1">{total}€ </h4>
            </div>

            <div className="d-flex justify-content-center mt-4">
              <a
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal"
                className="btn btn-warning rounded-pill col-9 shadow"
              >
                Checkout
              </a>
            </div>
          </nav>

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

                  <p>Bestellung aufgegeben!</p>
                </div>
                <div className="modal-footer mx-auto">
                  <a
                    href="/home"
                    className="btn btn-warning"
                    // data-bs-dismiss="modal"
                  >
                    Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
