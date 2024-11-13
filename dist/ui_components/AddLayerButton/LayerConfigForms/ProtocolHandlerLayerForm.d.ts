import React from 'react';
import { MlGeoJsonLayerProps } from 'src/components/MlGeoJsonLayer/MlGeoJsonLayer';
export interface ProtocolHandlerLayerFormProps {
    originType: string;
    config?: MlGeoJsonLayerProps;
    mapId?: string;
    onSubmit: (config: MlGeoJsonLayerProps) => void;
    onCancel: () => void;
}
export default function ProtocolHandlerLayerForm(props: ProtocolHandlerLayerFormProps): React.JSX.Element;
