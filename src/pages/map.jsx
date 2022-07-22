import React from "react";

export default function Map() {
  return  (
  <div className="Search">
  <input type="text"placeholder="           Search Mensa" name="search"></input>
  <div className="Map">
  <iframe width="600" height="800" id="gmap_canvas" src="https://maps.google.com/maps?q=hochschule%20f%C3%BCr%20technik%20und%20wirtschaft%20berlin&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
  </div>
  </div> 
  )
}