import React, { useState } from 'react';
import { useMap } from 'react-leaflet';
import './style.scss';

interface SidePanelProps {
  position?: 'left' | 'right';
  children?: React.ReactNode;
  buttonColor?: string;
  buttonIconColor?: string;
  panelBackgroundColor?: string;
}

const SidePanel: React.FC<SidePanelProps> = ({
  position = 'left',
  children,
  buttonColor = '#007bff',
  buttonIconColor = '#fff',
  panelBackgroundColor = '#fff',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const map = useMap();

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`side-panel-button ${position} ${isOpen ? 'open' : ''}`}
        onClick={togglePanel}
        style={{ backgroundColor: buttonColor, color: buttonIconColor }}
      />
      <div
        className={`side-panel-container ${position} ${isOpen ? 'open' : ''}`}
      >
        <div
          className="side-panel-content"
          style={{ backgroundColor: panelBackgroundColor }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default SidePanel;
