import React, { ReactNode } from 'react';
interface SortableContainerProps {
    children: ReactNode;
    layerId: string;
}
declare function SortableContainer({ children, layerId }: SortableContainerProps): React.JSX.Element;
export default SortableContainer;
