const MensaCard = (props) => {
  return (
    <a
      href="/dateselectionpage"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <div className="col">
        <div className="card h-100 shadow d-flex flex-row">
          <div className="card-body ">
            <h5 className="card-title">
              <b>{props.mensa.name}</b>
            </h5>
            <div className="d-flex justify-content-between">
              <p className="card-text">
                {props.mensa.coordinates?.[0]} 
                <br/>
                {props.mensa.coordinates?.[1]}
              </p>
            </div>
          </div>

          <div
            className="col align-self-center text-end"
            style={{ margin: "5vw" }}
          >
            <div href="/home" className="btn btn-warning rounded-pill">
              {props.mensa.distance?.toFixed(1) || "N/A"} km
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MensaCard;
