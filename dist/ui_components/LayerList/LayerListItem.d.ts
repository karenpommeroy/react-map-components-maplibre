import React from 'react';
import { SxProps } from '@mui/material';
interface LayerListItemProps {
    layerComponent: JSX.Element;
    visible: boolean;
    configurable: boolean;
    type?: 'background' | 'background-labels' | 'layer' | 'wms-layer' | 'vector-tile-layer';
    name: string;
    description?: string;
    setLayerState?: (state: unknown) => void;
    showDeleteButton?: boolean;
    listItemSx?: SxProps;
    buttons?: JSX.Element;
    layerId?: string;
    sortable?: boolean;
}
declare function LayerListItem({ layerComponent, visible, type, name, description, configurable, setLayerState, ...props }: LayerListItemProps): React.JSX.Element;
declare namespace LayerListItem {
    var defaultProps: {
        type: string;
        visible: boolean;
        showDeleteButton: boolean;
        buttons: React.JSX.Element;
    };
}
export default LayerListItem;
