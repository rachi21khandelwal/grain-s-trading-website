import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";
import Flipex from "./Flipex";
import Footer from "./Footer";

const Appmap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 26.9124, lng:  75.7873 }), []);

  return (
    <>
    <Flipex/>
    <div className="App">

      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 13.52043, lng: 73.856743 }} />
        </GoogleMap>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Appmap;