import React from 'react';
import PropTypes from 'prop-types';
declare const LoadingOverlayContext: React.Context<{}>;
declare const LoadingOverlayProvider: {
    (children: React.ReactNode): React.JSX.Element;
    propTypes: {
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    };
};
export { LoadingOverlayContext, LoadingOverlayProvider };
