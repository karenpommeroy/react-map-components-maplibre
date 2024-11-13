import React from 'react';
import { LayerSpecification } from 'maplibre-gl';
import { VectorSourceSpecification } from 'maplibre-gl';
export type ExtendedLayerSpecification = LayerSpecification & {
    masterVisible?: boolean;
};
export type MlVectorTileLayerProps = {
    mapId?: string;
    insertBeforeLayer?: string;
    layerId?: string;
    sourceOptions?: VectorSourceSpecification;
    url?: string;
    layers: ExtendedLayerSpecification[];
};
/**
 * Adds a vector-tile source and 0...n vector-tile-layers to the MapLibre instance referenced by
 * props.mapId
 *
 * @component
 */
declare const MlVectorTileLayer: (props: MlVectorTileLayerProps) => React.JSX.Element;
export default MlVectorTileLayer;
