import React, { useEffect, useContext, useRef } from "react";

import * as turf from "@turf/turf";
import { MapContext } from "react-map-components-core";

const route = [
  [7.09222, 50.725055],
  //[7.1579, 50.681],
  [7.0577, 50.7621],
];

const MlCameraFollowPath = (props) => {
  // Use a useRef hook to reference the layer object to be able to access it later inside useEffect hooks
  // without the requirement of adding it to the dependency list (ignore the false eslint exhaustive deps warning)
  const mapContext = useContext(MapContext);
  const initializedRef = useRef(false);
  const clearIntervalRef = useRef(false);

  useEffect(() => {
    if (!mapContext.mapExists(props.mapId)) return;
    return () => {
      clearIntervalRef.current = true;
      // This is the cleanup function, it is called when this react component is removed from react-dom
      // try to remove anything this component has added to the MapLibre-gl instance
      // e.g.: remove the layer
      // mapContext.getMap(props.mapId).removeLayer(layerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!mapContext.mapExists() || initializedRef.current) return;
    // the MapLibre-gl instance (mapContext.map) is accessible here
    // initialize the layer and add it to the MapLibre-gl instance or do something else with it

    initializedRef.current = true;
    var animationDuration = 80000;
    var cameraAltitude = 4000;
    var kmPerStep = 0.04;
    var routeDistance = turf.lineDistance(turf.lineString(route));

    var step = 1;
    var zoom = 18;
    var zoomSteps = 0.04;

    var timer = window.setInterval(function () {
      if (clearIntervalRef.current) {
        window.clearInterval(timer);
      }

      var alongRoute = turf.along(turf.lineString(route), step * kmPerStep).geometry
        .coordinates;

      if (step * kmPerStep < routeDistance) {
        //data.features[0].geometry.coordinates.push(coordinates[i]);
        //map.getSource("trace").setData(data);
        mapContext.map.panTo(alongRoute);
        step++;
      } else if (zoom > 14) {
        zoom = zoom - zoomSteps;
        mapContext.map.setZoom(zoom);
      } else {
        window.clearInterval(timer);
      }
    }, 70);
  }, [mapContext.mapIds, mapContext]);

  return <></>;
};

export default MlCameraFollowPath;
