import React, { ReactNode, useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

interface SidePanelProps {
  position?: "topleft" | "topright" | "bottomleft" | "bottomright";
  children: ReactNode;
}

const SidePanel: React.FC<SidePanelProps> = ({
  position = "topleft",
  children,
}) => {
  const map = useMap();

  useEffect(() => {
    const panel = new L.Control({ position: position });

    panel.onAdd = () => {
      const div = L.DomUtil.create("div", "leaflet-sidepanel");
      div.innerHTML = typeof children === "string" ? children : "";
      return div;
    };

    panel.addTo(map);

    return () => {
      map.removeControl(panel);
    };
  }, [map, position, children]);

  return null;
};

export default SidePanel;
