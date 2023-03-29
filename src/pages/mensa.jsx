import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMenu } from "../helper/menu";
import MealCard from "../components/mealCard";

function Mensa() {
  let { mensaID } = useParams();

  const [menu, setMenu] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState(null);
  const [categories, setCategories] = useState([]);
  const [checkedCat, setCheckedCat] = useState("Alle")

  useEffect(() => {
    // new Date().toISOString().split("T")[0]
    getMenu(mensaID, "2019-11-18").then(
      (response) => {
        if (response === null || response.length <= 0) {
          return;
        }
        setMenu(response);
        setFilteredMenu(response);
        setCategories(
          Array.from(new Set(["Alle", ...response.map((r) => r.category)]))
        );
      }
    );
  }, [mensaID]);

  function onFilterSelect(e) {
    const { value } = e.currentTarget;
    setCheckedCat(value)
    if (value === "Alle") {
      setFilteredMenu([...menu]);
      return;
    }
    setFilteredMenu([...menu].filter((entry) => entry.category === value));
  }

  if (menu) {
    return (
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>

        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            {categories.map((category) => {
              return (
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id={"check-" + category}
                    value={category}
                    onChange={onFilterSelect}
                    checked={checkedCat === category}
                  />
                  <label className="form-check-label" for={"check-" + category}>
                    {category}
                  </label>
                </div>
              );
            })}
          </div>
        </nav>
        <div
          className="row row-cols-1 row-cols-md-1 g-4 mt-4 mb-4 px-2"
          style={{
            overflowX: "hidden",
            height: "100wh",
            margin: "0",
            padding: "0",
          }}
        >
          {filteredMenu.map((m, i) => (
            <div>
              <MealCard meal={m} key={m.id} btn={true} del={false} idx={i} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Mensa;
