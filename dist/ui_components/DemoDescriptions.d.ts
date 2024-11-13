import React from 'react';
export interface DemoDescriptionItem {
    item: string;
    description: string;
}
interface DemoDescriptionsProps {
    section: string;
    json: DemoDescriptionItem[];
    title: string;
}
declare function DemoDescriptions(props: DemoDescriptionsProps): React.JSX.Element;
export default DemoDescriptions;
