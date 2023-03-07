const Welcomepage = () => {
  const img = require("../images/welcomePage.jpg");
  const logo = require("../images/cantify_freshways.png");

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
    <div style={mystyle} className="row align-items-center">
      <div className="d-flex justify-content-center">
        <img src={logo} alt="" width="150" height="150"></img>
      </div>

      <div className="d-flex justify-content-center">
        <h1 style={{ color: "white", font: "Roboto" }} className="text-center">
          Be a part of Cantify <br />
          spend more time with <br />
          friends and less with <br />
          standing in queue
        </h1>
      </div>

      <div className="d-grid gap-2 col-8 mx-auto ">
        <a href="/loginPage" className="btn btn-warning rounded-pill">
          Log in
        </a>
        <a href="/loginPage" className="btn btn-warning rounded-pill">
          Register
        </a>
      </div>
    </div>
  );
};

export default Welcomepage;
