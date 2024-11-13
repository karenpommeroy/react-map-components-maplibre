import React from "react";
export interface MlComponentTemplateProps {
    /**
     * Id of the target MapLibre instance in mapContext
     */
    mapId?: string;
}
/**
 * Component description
 *
 */
declare const MlComponentTemplate: {
    (props: MlComponentTemplateProps): React.JSX.Element;
    defaultProps: {
        mapId: undefined;
    };
};
export default MlComponentTemplate;
