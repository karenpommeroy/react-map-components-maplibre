import React from "react";
import PropTypes from "prop-types";
export interface MlWmsFeatureInfoPopupProps {
    /**
     * Id of the target MapLibre instance in mapContext
     */
    mapId?: string;
}
/**
 * TODO: Add short & useful description
 *
 * @param {object} props
 * @param {string} props.mapId Id of the target MapLibre instance in mapContext
 *
 * @component
 */
declare const MlWmsFeatureInfoPopup: {
    (props: MlWmsFeatureInfoPopupProps): React.JSX.Element;
    defaultProps: {
        mapId: undefined;
    };
    propTypes: {
        /**
         * Id of the target MapLibre instance in mapContext
         */
        mapId: PropTypes.Requireable<string>;
    };
};
export default MlWmsFeatureInfoPopup;
