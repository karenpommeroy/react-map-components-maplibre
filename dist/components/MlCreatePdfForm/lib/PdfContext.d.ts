import React from 'react';
import { PdfContextInterface } from './pdfContextType';
declare const PdfContext: React.Context<PdfContextInterface>;
declare const PdfContextProvider: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export { PdfContextProvider };
export default PdfContext;
