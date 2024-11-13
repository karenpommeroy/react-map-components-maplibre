import React from 'react';
import { SearchContextInterface } from './searchContextType';
interface SearchContextProviderProps {
    children: React.ReactNode;
    searchIndex: SearchContextInterface['searchIndex'];
    fields: SearchContextInterface['fields'];
    renderOption?: SearchContextInterface['renderOption'];
    searchFieldLabel?: SearchContextInterface['searchFieldLabel'];
}
declare const SearchContext: React.Context<SearchContextInterface>;
declare const SearchContextProvider: React.FC<SearchContextProviderProps>;
export { SearchContextProvider };
export default SearchContext;
