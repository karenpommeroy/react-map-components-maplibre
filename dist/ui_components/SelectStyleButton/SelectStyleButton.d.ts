import { SxProps } from '@mui/material';
import React from 'react';
import { StyleSpecification } from 'maplibre-gl';
export interface SelectStyleButtonProps {
    sx?: SxProps;
    onComplete?: (config: StyleSpecification[]) => void;
    styles?: StyleSpecification[];
    defaultStyles?: boolean;
    styleThumbnailPaths?: {
        [key: string]: string;
    };
}
declare const SelectStyleButton: {
    (props: SelectStyleButtonProps): React.JSX.Element;
    defaultProps: {
        style: never[];
        defaultStyles: boolean;
    };
};
export default SelectStyleButton;
