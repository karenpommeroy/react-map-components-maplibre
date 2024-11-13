import { useMapType } from './useMap';
import { GeoJSONSourceSpecification, LayerSpecification, MapMouseEvent, Style, MapEventType, Map, FilterSpecification } from 'maplibre-gl';
import MapLibreGlWrapper from '../components/MapLibreMap/lib/MapLibreGlWrapper';
import { GeoJSONObject } from '@turf/turf';
type getLayerType = Style['getLayer'];
type useLayerType = {
    map: MapLibreGlWrapper | undefined;
    layer: ReturnType<getLayerType> | undefined;
    layerId: string;
    componentId: string;
    mapHook: useMapType;
};
export type MapEventHandler = (ev: MapMouseEvent & {
    features?: GeoJSON.Feature[] | undefined;
} & Record<string, unknown>) => void;
export interface useLayerProps {
    mapId?: string;
    layerId?: string;
    idPrefix?: string;
    insertBeforeLayer?: string;
    insertBeforeFirstSymbolLayer?: boolean;
    geojson?: GeoJSONObject | GeoJSON.Feature | GeoJSON.FeatureCollection;
    options: Partial<LayerSpecification & {
        source?: GeoJSONSourceSpecification | string;
        id?: string;
        filter?: FilterSpecification;
    }>;
    onHover?: (ev: MapEventType & unknown) => Map | void;
    onClick?: (ev: MapEventType & unknown) => Map | void;
    onLeave?: (ev: MapEventType & unknown) => Map | void;
}
declare function useLayer(props: useLayerProps): useLayerType;
declare namespace useLayer {
    var defaultProps: {};
}
export default useLayer;
