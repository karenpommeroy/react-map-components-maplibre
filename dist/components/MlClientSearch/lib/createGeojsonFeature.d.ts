type ExcludedGeometryCollection = GeoJSON.Point | GeoJSON.MultiPoint | GeoJSON.LineString | GeoJSON.MultiLineString | GeoJSON.Polygon;
export declare function createGeoJSONFeature(coordinates: ExcludedGeometryCollection['coordinates']): GeoJSON.Feature<ExcludedGeometryCollection>;
export {};
