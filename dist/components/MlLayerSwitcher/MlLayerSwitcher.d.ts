import './MlLayerSwitcher.css';
import React from 'react';
type LayerConfig = {
    layerId: string;
    src?: string;
    label: string;
    linkedTo?: string;
};
type BaseSourceConfig = {
    label?: string;
    active?: boolean;
    layers: LayerConfig[];
};
type DetailLayerConfig = {
    label?: string;
    layers: LayerConfig[];
};
export type MlLayerSwitcherProps = {
    baseSourceConfig: BaseSourceConfig;
    detailLayerConfig: DetailLayerConfig;
    mapId?: string;
};
/**
 * @component
 *
 *
 */
declare const MlLayerSwitcher: React.FC<MlLayerSwitcherProps>;
export default MlLayerSwitcher;
