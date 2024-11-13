import React from 'react';
import { CircleLayerSpecification, FillLayerSpecification, LineLayerSpecification } from 'maplibre-gl';
export type paintPropsType = CircleLayerSpecification['paint'] | FillLayerSpecification['paint'] | LineLayerSpecification['paint'];
interface LayerPropertyFormProps {
    layerUuid: string;
    mapConfigKey: string;
}
declare function LayerPropertyForm(props: LayerPropertyFormProps): React.JSX.Element;
export default LayerPropertyForm;
