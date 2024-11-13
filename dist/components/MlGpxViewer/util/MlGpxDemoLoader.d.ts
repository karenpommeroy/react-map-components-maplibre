import React from 'react';
interface MlGpxDemoLoaderProps {
    open: boolean;
    close: () => void;
    setGpx: (gpx: string | undefined) => void;
}
/**
 * MlGpxDemoLoader returns a button to load a Demo GPX Track into the map.
 */
declare const MlGpxDemoLoader: (props: MlGpxDemoLoaderProps) => React.JSX.Element;
export default MlGpxDemoLoader;
