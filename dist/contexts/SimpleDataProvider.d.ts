import React from "react";
import PropTypes from "prop-types";
export interface SimpleDataProviderProps {
    url: string;
    format: 'json' | 'csv' | 'xml';
    nodeType: string;
    data_property: string;
    formatData?: (data: any) => any;
    onData: () => void;
    children: React.ReactNode;
}
declare const SimpleDataProvider: {
    (props: SimpleDataProviderProps): React.JSX.Element;
    propTypes: {
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    };
};
export default SimpleDataProvider;
