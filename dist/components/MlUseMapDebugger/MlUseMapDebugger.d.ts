import React from "react";
export interface MlUseMapDebuggerProps {
    mapId?: string;
    watch?: string[];
    filter?: {
        [key: string]: any;
    };
}
/**
 * Renders a collapsible top-drawer containing live map debug information
 *
 * @param {MlUseMapDebuggerProps} props
 * @param {string} props.mapId Id of the target MapLibre instance in mapContext
 *
 * @component
 */
declare const MlUseMapDebugger: React.FC<MlUseMapDebuggerProps>;
export default MlUseMapDebugger;
