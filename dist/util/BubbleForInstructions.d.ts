import React from 'react';
export interface BubbleForInstructionProps {
    bubbleRight?: string;
    bubbleLeft?: string;
    bubbleTop?: string;
    bubbleBottom?: string;
    zIndex: string;
    textMarginTop: string;
    textMarginLeft: string;
    iconTransform: string;
    iconMarginTop: string;
    iconMarginLeft: string;
    children?: React.ReactNode;
}
declare function BubbleForInstruction(props: BubbleForInstructionProps): React.JSX.Element;
export default BubbleForInstruction;
