import * as React from 'react';
export interface ConfirmDialogProps {
    open: boolean;
    title: string;
    text: string;
    onConfirm: () => void;
    onCancel: () => void;
}
declare function ConfirmDialog(props: ConfirmDialogProps): React.JSX.Element;
declare namespace ConfirmDialog {
    var defaultProps: {
        title: string;
        text: string;
    };
}
export default ConfirmDialog;
