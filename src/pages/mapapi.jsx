import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";


export default function MapApi() {
  const {} = useLoadScript({
    googleMapsApiKey: "AIzaSyBBL7c9A67Wzs-b-eZkdw0RQgrNJ6InaRo",
    
  })
  
  return <div>map</div>;
}