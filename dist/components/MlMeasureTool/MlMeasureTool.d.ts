import React from 'react';
import * as turf from '@turf/turf';
import { GeoJSONObject } from '@turf/turf';
export interface MlMeasureToolProps {
    /**
     * String that specify if the Tool measures an area ("polygon") or length ("line")
     */
    measureType?: 'polygon' | 'line';
    /**
     * String that dictates which unit of measurement is used
     */
    unit?: turf.Units;
    /**
     * Callback function that is called each time measurment geometry within has changed within MlMeasureTool.
     * First parameter is the new GeoJson feature.
     */
    onChange?: (options: {
        value: number;
        unit: string | undefined;
        geojson: GeoJSONObject;
        geometries?: [];
    }) => void;
    /**
     * Callback function that is called by the end of drawing geometries.
     */
    onFinish?: () => void;
}
declare const MlMeasureTool: {
    (props: MlMeasureToolProps): React.JSX.Element;
    defaultProps: {
        mapId: undefined;
        measureType: string;
        unit: string;
    };
};
export default MlMeasureTool;
