import React from 'react';
export interface MlScaleReferenceProps {
    mapId?: string;
    insertBeforeLayer?: string | undefined;
    maxWidth?: number;
    unit?: string;
}
declare const MlScaleReference: (props: MlScaleReferenceProps) => React.JSX.Element;
export default MlScaleReference;
