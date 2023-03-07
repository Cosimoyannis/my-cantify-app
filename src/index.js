import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MensaCard from "./components/mensaCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export let db;
const request = indexedDB.open("my-cantify-db", 4);
request.onerror = (event) => {
  console.error("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = (event) => {
  db = event.target.result;

  console.log("success");
};

/**
 *
 * @param {IDBVersionChangeEvent} event
 */
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const upgradeDB = event.target.result;
  
  upgradeDB.createObjectStore("mensen", { keyPath: "id" });

  insertMensaData();
};

async function insertMensaData() {
  const req = await axios.get("https://openmensa.org/api/v2/canteens/");
  if (req.status !== 200) {
    return;
  }

  const tx = db.transaction("mensen", "readwrite");
  let store = tx.objectStore("mensen");

  for (const entry of req.data) {
    store.add(entry);
  }
}

export async function getMensen() {
  if (db === undefined) return;
  /**
   *  @type {IDBTransaction}
   */
  const tx = db.transaction("mensen", "readonly");
  let store = tx.objectStore("mensen");
  const req = store.getAll()
  return new Promise((resolve, reject) => {
    req.onsuccess = event => {
      resolve(req.result)
    }    
  })
}
