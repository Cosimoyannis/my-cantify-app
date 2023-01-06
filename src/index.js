import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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
};

/**
 *
 * @param {IDBVersionChangeEvent} event
 */
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const upgradeDB = event.target.result;

  /**
   *  @type {IDBObjectStore}
   */
  const mensenStore = upgradeDB.createObjectStore("mensen", { keyPath: "id" });

  insertMensaData(this);
};

/**
 *
 * @param {IDBOpenDBRequest} mensenStore
 */
async function insertMensaData(mensenStore) {
  const request = await axios.get("https://openmensa.org/api/v2/canteens/");
  if (request.status !== 200) {
    return;
  }

  const tx = db.transaction("mensen", "readwrite");
  var store = tx.objectStore("mensen");

  for (const entry of request.data) {
    store.add(entry);
  }
}
