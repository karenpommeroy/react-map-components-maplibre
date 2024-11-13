import React from 'react';
import { BubbleForInstructionProps } from './BubbleForInstructions';
export interface StepObject {
    duration: number;
    props: BubbleForInstructionProps;
    content: JSX.Element;
}
export interface InstructionProps {
    steps: StepObject[];
    open: boolean;
    callback?: () => void;
}
declare const Instructions: (props: InstructionProps) => React.JSX.Element;
export default Instructions;
