import React, { useState, useEffect } from "react";
import axios from "axios";
import { getMensen } from "../index";
import MensaCard from "../components/mensaCard";
import { calculateDistance } from "../helper/distance";

function Home() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState(null);
  const [mensen, setMensen] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, [url]);

  navigator.geolocation.getCurrentPosition((e) => {
    getMensen().then((a) => {
      if (!a) return
      const mappedMensen = a.map(v => {
      // console.log(v);
      v.distance = calculateDistance(e.coords.latitude, e.coords.longitude, v.coordinates?.[0] || null, v.coordinates?.[1] || null)
      return v
    })
    mappedMensen.sort((a, b) => {
      if (b.distance === null) {
        return -1
      }

      if (a.distance === null) {
        return 1
      }
      return a.distance - b.distance
    })
    setMensen(mappedMensen);
  });
  })

  if (users && mensen) {
    return (
      <div id="home-root" style={{ marginTop: "100px" }}>
        <div
          className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-4 px-2"
          style={{
            overflowX: "hidden",
            height: "100wh",
            margin: "0",
            padding: "0",
          }}
        >
          {mensen.map((mensa, i) => (
            <MensaCard mensa={mensa} key={i} />
          ))}
        </div>

        <nav className="navbar bg-white fixed-top rounded-pill py-4 shadow">
          <div className="container d-flex justify-content-around">
            <a className="navbar-brand" href="/profileSettings">
              <img
                src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/pngwing.com%20(4).png?v=1656781464561"
                alt=""
                width="40"
                height="40"
              ></img>
            </a>
            <a className="navbar-brand" href="/about"></a>
            <a className="navbar-brand" href="/MensaSelectionPage"></a>
            <a className="navbar-brand" href="/">
              <img
                src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/bell_orange.png?v=1656865820884"
                alt=""
                width="24"
                height="24"
              ></img>
            </a>
          </div>
        </nav>
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

export default Home;
