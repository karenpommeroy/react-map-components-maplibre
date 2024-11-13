import React from 'react';
import { StyleSpecification } from 'maplibre-gl';
export interface SelectStylePopupProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    styles?: StyleSpecification[];
    onSelect?: (style: StyleSpecification) => void;
    styleThumbnailPaths?: {
        [key: string]: string;
    };
}
declare const SelectStylePopup: {
    (props: SelectStylePopupProps): React.JSX.Element;
    defaultProps: {
        styleThumbnailPaths: {};
    };
};
export default SelectStylePopup;
