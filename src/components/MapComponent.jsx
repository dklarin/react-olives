import React, { useState, useEffect, useRef } from "react";
import MapGL, { FlyToInterpolator } from "react-map-gl";
import Points from "../komps/Layers/Points";
//import Origins from "../komps/Layers/Origins";
//import Loader from "../komps/Loader";
//import Upload from "../komps/Upload";
//import Calc from "../komps/Calc";
//import Alerts from "../komps/Alerts";
import EmptyModal from "../komps/Upload/EmptyModal";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFjamltdWxhYyIsImEiOiJjazZvNzVrdDgwMDN3M2VxbHljdjF5Yzd4In0.rWPmBMx94_Z7RwLIXnXF4g";
const sleep = (m) => new Promise((r) => setTimeout(r, m));

export default function MapComponent() {
  const [viewport, setViewport] = useState({
    latitude: 43.78543,
    longitude: 15.64113,
    minZoom: 6,
    zoom: 13,
    pitch: 0,
    bearing: 0,
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [immediate, setImmediate] = useState(null);
  const [three, setThree] = useState(null);
  const [twentyFour, setTwentyFour] = useState(null);
  const [originLayer, setOriginLayer] = useState(null);
  const [infectedLayer, setInfectedLayer] = useState(null);
  const [modalState, setModalState] = useState(true);

  const mapRef = useRef(null);
  useEffect(() => {
    (async function () {
      /*const map = mapRef.current.getMap();
      map.on("click", "initial", function (e) {
        console.log(e);
      });
      await sleep(1500);*/
      try {
        const response = await fetch(`http://demo7514816.mockable.io/`);

        const json = await response.json();

        let fetchedGeoJson = {
          type: "FeatureCollection",
          features: [],
        };
        //eslint-disable-next-line
        json.features.map((feature) => {
          fetchedGeoJson.features.push({
            type: "Feature",

            ...feature,
          });
        });
        setLoading(false);
        setInitialData(fetchedGeoJson);
      } catch (e) {
        console.log(e);
        setError(true);
      }
    })();
  }, []);

  const flyTo = ({ longitude, latitude, zoom }) => {
    setViewport({
      ...viewport,
      longitude,
      latitude,
      zoom: zoom,
      transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
      transitionDuration: "auto",
    });
  };

  return (
    <MapGL
      ref={mapRef}
      {...viewport}
      width="100%"
      height="100vh"
      //mapStyle="mapbox://styles/macjimulac/ck822lxw108m61io4gyyl12q6"
      mapStyle="mapbox://styles/mapbox/satellite-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      {/*{loading && <Loader error={error} loading={loading} />}*/}
      {/*{!loading && <Upload setUserData={setUserData} />}*/}
      <Points data={initialData} flyTo={flyTo} />
      {/*{!infectedLayer ? (
        <Points data={initialData} flyTo={flyTo} />
      ) : (
        <>
          <Origins origin data={originLayer} flyTo={flyTo} />
          <Points infected data={infectedLayer} flyTo={flyTo} />
        </>
      )}*/}
      {/*} <Alerts
        immediate={immediate}
        three={three}
        twentyFour={twentyFour}
        flyTo={flyTo}
      />*/}
      {userData && userData.locations.length === 0 ? (
        <EmptyModal
          empty
          open={modalState}
          onClose={() => setModalState(false)}
        />
      ) : null}
      {infectedLayer && infectedLayer.features.length === 0 ? (
        <EmptyModal
          noInfected
          open={modalState}
          onClose={() => setModalState(false)}
        />
      ) : null}
    </MapGL>
  );
}
