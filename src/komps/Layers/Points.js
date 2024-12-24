import React from "react";
import { Source, Layer } from "react-map-gl";

const metersToPixelsAtMaxZoom = (meters, latitude) =>
  meters / 0.075 / Math.cos((latitude * Math.PI) / 180);

export default function Points(props) {
  if (props.data && props.data.features) {
    console.log(props.data.features);
  }

  const dataLayer = {
    id: "points",
    type: "circle",
    paint: {
      "circle-radius": {
        base: 2.25,
        stops: [
          [0, 0],
          [20, metersToPixelsAtMaxZoom(100, 31)],
        ],
      },
      "circle-color": "#ff0000",
      "circle-opacity": 0.5,
    },
  };

  return (
    <Source data={props.data} type="geojson">
      <Layer {...dataLayer} />
    </Source>
  );
}
