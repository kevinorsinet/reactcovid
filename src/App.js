import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import './App.css';

import Data from "./centres-vaccination.json";

function App() {
  // Hooks : useState()
  const [vaccins, setVaccin] = useState();

  useEffect(
    () => {
      (async ()=>{
        await fetch("./centres-vaccination.json", {
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
        })
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then(function (vaccinJson) {

            setVaccin(vaccinJson.features);
        });
      })()
    },
    []  
  )

console.log(vaccins);

  return (
    <div className="App">

      <div style={{ width: '80%', height: '600px', margin: '0 auto'}}>

        <h1>Centres de vaccination</h1>
        {/* <MapContainer
            center={[46.6681699, -1.4148661]}
            zoom={13}
            scrollWheelZoom={false} // Zoomer avec le scroll de la souris
            style={{ height: "100%", width: "100%" }}
          >

        <TileLayer
          url={"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnVudGhlYXIiLCJhIjoiY2tkYTdnOHpmMGI3NDJxbXpoc2QwMXc3MyJ9.nu-giQ821MNuH64prgx2yg"}
          attribution='Centres de vaccination' 
        />
          {
          vaccins.map(
            (vaccin, index) => {
              return (
                <Marker key={index}
                  position={vaccin.geometry.coordinates}
                  draggable={true}
                  icon={
                    L.icon({
                      iconSize: [60, 60],
                      setRadius: 10,
                      iconAnchor: [10, 41],
                      popupAnchor: [2, -40],
                      shadowSize: [100, 30], // size of the shadow
                      shadowAnchor: [15, 10],  // the same for the shadow
                      iconUrl: `https://img2.freepng.fr/20180404/clw/kisspng-computer-icons-google-map-maker-marker-pen-cartodb-map-marker-5ac4f16f538be1.8585288315228563033422.jpg`,
                      shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
                    })
                  }>
                  <Popup>{vaccin.properties.c_nom}</Popup>
                </Marker>
              )
            }
          )}

      </MapContainer> */}
    
      </div>
    </div>
  );
}

export default App;
