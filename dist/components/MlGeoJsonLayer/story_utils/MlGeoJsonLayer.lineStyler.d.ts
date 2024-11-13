import React from 'react';
import { GeoJSON } from 'geojson';
interface LineStylerProps {
    geojson: GeoJSON;
    openSidebar: boolean;
    setOpenSidebar: (open: boolean) => void;
}
declare const LineStyler: React.FC<LineStylerProps>;
export default LineStyler;
