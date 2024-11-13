import React from 'react';
import { SxProps } from '@mui/material';
import { LayerOrderItem } from '../../stores/map.store';
interface LayerTreeListItemProps {
    visible?: boolean;
    type?: 'background' | 'background-labels' | 'layer' | 'wms-layer' | 'vector-tile-layer';
    name?: string;
    description?: string;
    setLayerState?: (state: unknown) => void;
    showDeleteButton?: boolean;
    listItemSx?: SxProps;
    buttons?: JSX.Element;
    sortable?: boolean;
    mapConfigKey: string;
    layerOrderConfig: LayerOrderItem;
}
declare function LayerTreeListItem(props: LayerTreeListItemProps): React.JSX.Element;
export default LayerTreeListItem;
