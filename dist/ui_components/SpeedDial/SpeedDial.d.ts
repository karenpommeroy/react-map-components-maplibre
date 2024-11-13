import React from 'react';
export interface SpeedDialProps {
    /**
     * Id of the target MapLibre instance in mapContext
     */
    mapId?: string;
}
declare const SpeedDial: {
    (): React.JSX.Element;
    defaultProps: {
        mapId: undefined;
    };
};
export default SpeedDial;
