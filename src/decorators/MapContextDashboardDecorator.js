import React from "react";

import { MapComponentsProvider } from "react-map-components-core";
import { LoadingOverlayProvider } from "../ui_components/LoadingOverlayContext";
import LoadingOverlay from "../ui_components/LoadingOverlay";
import "./style.css";

const decorators = [
  (Story) => (
    <MapComponentsProvider>
      <LoadingOverlayProvider>
        <LoadingOverlay></LoadingOverlay>
        <Story />
      </LoadingOverlayProvider>
    </MapComponentsProvider>
  ),
];

export default decorators;
