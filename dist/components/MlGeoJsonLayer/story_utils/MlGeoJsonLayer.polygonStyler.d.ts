import React from 'react';
interface PolygonStylerProps {
    geojson: GeoJSON.FeatureCollection;
    openSidebar: boolean;
    setOpenSidebar: (open: boolean) => void;
}
declare const PolygonStyler: React.FC<PolygonStylerProps>;
export default PolygonStyler;
