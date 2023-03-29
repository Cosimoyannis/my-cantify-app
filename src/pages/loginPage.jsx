import { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const img = require("../images/welcomePage.jpg");
  const logo = require("../images/cantify_freshways.png");

  const history = useHistory();

  const mystyle = {
    height: "100vh",

    overflowX: "hidden",
    margin: "0",
    padding: "0",
  };

  const validUsername = "leon@hobelmann.de"
  const validPassword = "1234"
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const login = (e) => {
    e.preventDefault();
    
    console.log();

    if (username === validUsername && password === validPassword) {
      history.push("/home")
      return
    }

    setError("Username or Password is not correct")

  }

  return (
    <div style={mystyle} className="row align-items-center">
      <div className="d-flex justify-content-center">
        <img src={logo} alt="" width="150" height="150"></img>
      </div>

      <div className="d-grid gap-2 col-8 mx-auto ">
        <h1 className="mx-auto" style={{ fontSize: "23pt" }}>
          Welcome back!
        </h1>
        <h5 className="text-muted fs-4 fw-light mx-auto">Login to continue</h5>
      </div>

    <form onSubmit={login}>
      <div className="d-grid gap-2 col-8 mx-auto ">
        <div className="form-group mb-2">
          <input
            type="email"
            className="form-control rounded-pill shadow"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-describedby="emailHelp"
            placeholder="Email"
          ></input>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control rounded-pill shadow"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby="passwordHelp"
            placeholder="Password"
          ></input>
        </div>
      {error !== null ?
        <div className="form-error">
          {error}
        </div>
        : ""
      }
      </div>


      <div className="d-grid gap-2 col-8 mx-auto mt-3">
        <button type="Submit" className="btn btn-warning rounded-pill shadow">
          Log in
        </button>
      </div>
    </form>
    </div>
  );
};

export default LoginPage;
