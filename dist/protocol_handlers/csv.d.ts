import { RequestParameters } from 'maplibre-gl';
import { FeatureCollection } from '@turf/turf';
import * as csv2geojsonType from './csv2geojson';
declare function convertCsv(filename: string, options: csv2geojsonType.csvOptions): Promise<FeatureCollection>;
declare const CSVProtocolHandler: (params: RequestParameters) => Promise<{
    data: FeatureCollection<import("@turf/turf").Geometry | import("@turf/turf").GeometryCollection, import("@turf/turf").Properties>;
}>;
export { CSVProtocolHandler, convertCsv };
