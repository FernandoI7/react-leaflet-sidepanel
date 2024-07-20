import React from 'react';
import './style.scss';
interface SidePanelProps {
    position?: 'left' | 'right';
    children?: React.ReactNode;
    buttonColor?: string;
    buttonIconColor?: string;
    panelBackgroundColor?: string;
}
declare const SidePanel: React.FC<SidePanelProps>;
export default SidePanel;
