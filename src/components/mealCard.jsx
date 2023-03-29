const burger = require("../images/burger2.png");

const priceMap = {
    students: "Studenten",
employees: "Mitarbeiter",
pupils: "Schüler",
others: "Andere",
}

const MealCard = (props) => {
  return (
    <div className="col">
        <div className="card mb-3">
            <div className="row g-0">
                {/* <div className="col-md-4">
                    <img src={burger} className="img-fluid rounded-start" alt={props.meal.name} />
                </div> */}
                {/* <div className="col-md-8"> */}
                    <div className="card-body">
                        <h5 className="card-title">{props.meal.name}</h5>
                        <h5 className="card-subtitle mb-2 text-muted">{props.meal.category}</h5>
                        <p className="card-text">{props.meal.notes.map(note =>  <span className="badge rounded-pill text-bg-success" style={{ marginRight: "5px" }}>{note}</span>)}</p>
                        {Object.keys(props.meal.prices).map(key => {
                            if (props.meal.prices[key] === null) {
                                return <h5><span className="badge bg-secondary">{priceMap[key]}: N/A</span></h5>
                            }
                            return <h5><span className="badge bg-secondary">{priceMap[key]}: {props.meal.prices[key]}€</span></h5>
                        })}
                        <p className="card-text"></p>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </div>
  );
};

export default MealCard;
