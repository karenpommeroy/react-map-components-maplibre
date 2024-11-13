import { RequestParameters } from 'maplibre-gl';
import { FeatureCollection, Geometry, GeometryCollection, Properties } from '@turf/turf';
declare function convertTopojson(params: {
    filename: string;
}): Promise<FeatureCollection>;
declare const TopojsonProtocolHandler: (params: RequestParameters) => Promise<{
    data: FeatureCollection<Geometry | GeometryCollection, Properties>;
}>;
export { TopojsonProtocolHandler, convertTopojson };
