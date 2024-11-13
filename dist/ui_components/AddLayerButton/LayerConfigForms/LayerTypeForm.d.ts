import React from 'react';
export interface LayerTypeFormProps {
    onSelect: (type: string) => void;
    layerTypes: string[];
}
declare const LayerTypeForm: {
    (props: LayerTypeFormProps): React.JSX.Element;
    defaultProps: {};
};
export default LayerTypeForm;
