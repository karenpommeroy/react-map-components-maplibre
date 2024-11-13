import React from 'react';
export interface ColorPickerProps {
    onChange?: (value: string) => void;
    convert: 'rgb' | 'rgba' | 'rgba_hex' | 'hex' | 'rgba_rgb';
    value?: string;
}
declare const ColorPicker: {
    ({ convert, ...props }: ColorPickerProps): React.JSX.Element;
    defaultProps: {
        convert: string;
        label: string;
        name: string;
    };
};
export default ColorPicker;
