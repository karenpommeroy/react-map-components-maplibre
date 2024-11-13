import React from 'react';
import { MlVectorTileLayerProps } from '../../../components/MlVectorTileLayer/MlVectorTileLayer';
export declare const ListItemStyled: import("@emotion/styled").StyledComponent<import("@mui/material").ListItemOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & {
    ref?: ((instance: HTMLLIElement | null) => void) | React.RefObject<HTMLLIElement> | null | undefined;
}, "className" | "style" | "classes" | "children" | "components" | "componentsProps" | "slotProps" | "slots" | "alignItems" | "ContainerComponent" | "ContainerProps" | "dense" | "disableGutters" | "disablePadding" | "divider" | "secondaryAction" | "sx"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const CheckboxListItemIcon: import("@emotion/styled").StyledComponent<import("@mui/material").ListItemIconProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const CheckboxStyled: import("@emotion/styled").StyledComponent<import("@mui/material").CheckboxProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
interface LayerListItemVectorLayerProps {
    id: string;
    configurable?: boolean;
    vtProps: MlVectorTileLayerProps;
    setVtProps: ((state: unknown) => void) | undefined;
    visibleMaster?: boolean;
}
declare function LayerListItemVectorLayer({ configurable, vtProps, setVtProps, id, ...props }: LayerListItemVectorLayerProps): React.JSX.Element;
declare namespace LayerListItemVectorLayer {
    var defaultProps: {
        configurable: boolean;
    };
}
export default LayerListItemVectorLayer;
