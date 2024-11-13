import { RequestParameters } from 'maplibre-gl';
import { FeatureCollection, Geometry, GeometryCollection, Properties } from '@turf/turf';
declare function convertXML(params: {
    filename: string;
    protocolId: string;
}): Promise<FeatureCollection>;
declare const XMLProtocolHandler: (params: RequestParameters) => Promise<{
    data: FeatureCollection<Geometry | GeometryCollection, Properties>;
}>;
export { XMLProtocolHandler, convertXML };
