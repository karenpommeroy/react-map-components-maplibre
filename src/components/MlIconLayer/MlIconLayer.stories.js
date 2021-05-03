import React, { useRef, useEffect, useState, useContext } from "react";
import * as d3 from "d3";

import MlIconLayer from "./MlIconLayer";

import DeckGlProvider from "../../deckgl_components/DeckGlProvider";
import mapContextDecorator from "../../decorators/MapContextKlokantechBasicDecorator";
import { MapContext, SimpleDataProvider } from "react-map-components-core";
import { LoadingOverlayContext } from "../../ui_components/LoadingOverlayContext";
import destinationPoint from "./assets/destinationPoint";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "MapComponents/MlIconLayer",
  component: MlIconLayer,
  argTypes: {
    url: {},
    layer: {},
  },
  decorators: mapContextDecorator,
};

const Template = (args) => {
  const mapContext = useContext(MapContext);
  const [dataUrl, setDataUrl] = useState("");
  const initializedRef = useRef(false);

  const renewDataUrl = () => {
    console.log("set data url");
    setTimeout(() => {
      setDataUrl("https://opensky-network.org/api/states/all?vv=" + Math.random());
    }, 10000);
  };

  useEffect(() => {
    if (mapContext.map) {
      mapContext.map.setZoom(8.5);
    }
  }, [mapContext.map]);

  useEffect(() => {
    console.log("ONCE");
    if (!initializedRef.current) {
      initializedRef.current = true;
      renewDataUrl();
    }
  }, []);

  return (
    <DeckGlProvider>
      <SimpleDataProvider
        format="json"
        url={dataUrl}
        formatData={(d) => ({
          callsign: d[1],
          longitude: d[5],
          latitude: d[6],
          velocity: d[9],
          altitude: d[13],
          origin_country: d[2],
          true_track: -d[10],
          interpolatePos: d3.geoInterpolate(
            [d[5], d[6]],
            destinationPoint(d[5], d[6], d[9] * 10, d[10])
          ),
        })}
        data_property="states"
        onData={renewDataUrl}
      >
        <MlIconLayer />
      </SimpleDataProvider>
    </DeckGlProvider>
  );
};

export const ExampleConfig = Template.bind({});
ExampleConfig.parameters = {};
ExampleConfig.args = {};
