import { RequestParameters } from 'maplibre-gl';
import { FeatureCollection, Geometry, GeometryCollection, Properties } from '@turf/turf';
import osm2geojson from 'osm2geojson-lite';
declare function convertOSM(params: {
    filename: string;
    options: osm2geojson.Options;
}): Promise<FeatureCollection>;
declare const OSMProtocolHandler: (params: RequestParameters) => Promise<{
    data: FeatureCollection<Geometry | GeometryCollection, Properties>;
}>;
export { OSMProtocolHandler, convertOSM };
