import React from 'react';
import { SearchContextInterface } from './lib/searchContextType';
interface MlClientSearchProps {
    /**
     * Search Engine: http://elasticlunr.com/
     */
    searchIndex: SearchContextInterface['searchIndex'];
    /**
     * Docs: http://elasticlunr.com/docs/configuration.js.html
     */
    fields: SearchContextInterface['fields'];
    /**
     * Docs: 	https://mui.com/material-ui/api/autocomplete/
     */
    renderOption?: SearchContextInterface['renderOption'];
    /**
     * Label search field
     */
    searchFieldLabel?: SearchContextInterface['searchFieldLabel'];
}
export type { MlClientSearchProps };
/**
 * Component template
 *
 */
declare const MlClientSearch: {
    ({ searchIndex, fields, renderOption, searchFieldLabel, }: MlClientSearchProps): React.JSX.Element;
    defaultProps: {};
};
export default MlClientSearch;