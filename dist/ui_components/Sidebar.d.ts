import React from 'react';
import { PaperProps, DrawerProps } from '@mui/material';
interface SidebarProps {
    drawerPaperProps?: PaperProps;
    drawerHeaderProps?: Headers;
    children?: React.ReactNode;
    open?: boolean;
    setOpen?: (val: boolean) => void;
    name?: string;
    drawerBleeding?: number;
}
export default function Sidebar({ drawerPaperProps, drawerHeaderProps, setOpen, ...props }: SidebarProps & DrawerProps): React.JSX.Element;
export {};
