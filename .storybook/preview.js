import React from "react";

import { withTests } from "@storybook/addon-jest";
import results from "../src/.jest-test-results.json";
import { themes } from "@storybook/theming";

import { MapComponentsProvider } from "react-map-components-core";
import MapLibreMap from "../src/components/MapLibreMap/MapLibreMap";
import "./style.css";

export const decorators = [
  withTests({
    results,
  }),
];
//export const decorators = [
//  (Story) => (
//    <MapComponentsProvider>
//      <Story />
//      <MapLibreMap
//        options={{
//          //style: "mapbox://styles/mapbox/light-v10",
//          //center: [-87.62712, 41.89033],
//          zoom: 14.5,
//          //pitch: 45,
//          style: "https://wms.wheregroup.com/tileserver/style/osm-bright.json",
//          //style:"https://wms.wheregroup.com/tileserver/style/osm-liberty.json",
//          //center: [8.607, 53.1409349],
//          //          zoom: 13,
//          center: [7.0851268, 50.73884],
//          //          maxBounds: [
//          //            [1.40625, 43.452919],
//          //            [17.797852, 55.973798],
//          //          ],
//        }}
//      />
//    </MapComponentsProvider>
//  ),
//];

export const parameters = {
  docs: {
    inlineStories: false,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
};
