import React from 'react';
import { Feature } from '@turf/turf';
import { MlGeoJsonLayerProps } from '../MlGeoJsonLayer/MlGeoJsonLayer';
export type MlTransitionGeoJsonLayerProps = MlGeoJsonLayerProps & {
    transitionTime?: number;
    geojson?: Feature | GeoJSON.Feature;
};
/**
 * Adds source and layer of types "line", "fill" or "circle" to display GeoJSON data on the map.
 */
declare const MlTransitionGeoJsonLayer: (props: MlTransitionGeoJsonLayerProps) => React.JSX.Element;
export default MlTransitionGeoJsonLayer;
