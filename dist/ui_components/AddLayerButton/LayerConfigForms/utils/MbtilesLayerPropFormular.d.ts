import React, { Dispatch, SetStateAction } from 'react';
import { LayerSpecification } from 'maplibre-gl';
interface MbtilesLayerPropFormularProps {
    setter: Dispatch<SetStateAction<LayerSpecification[]>>;
}
export default function MbtilesLayerPropFormular(props: MbtilesLayerPropFormularProps): React.JSX.Element;
export {};
