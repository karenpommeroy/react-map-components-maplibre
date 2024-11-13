import React from 'react';
import { LayerConfig } from 'src/contexts/LayerContext';
export interface AddLayerPopupProps {
    open: boolean;
    config?: LayerConfig;
    layerTypes: string[];
    setOpen: (open: boolean) => void;
    onChange?: (config: LayerConfig) => void;
    onComplete?: (config: LayerConfig) => void;
}
declare const AddLayerPopup: {
    (props: AddLayerPopupProps): React.JSX.Element;
    defaultProps: {};
};
export default AddLayerPopup;
