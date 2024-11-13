import React from 'react';
interface LayerBoxProps {
    mapId?: string;
    layerId: string;
    thumbnail?: string;
    label: string;
    handleLayerBoxClick?: (layerId: string) => void;
}
declare const LayerBox: React.FC<LayerBoxProps>;
export default LayerBox;
