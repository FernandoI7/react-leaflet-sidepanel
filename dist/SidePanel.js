"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_leaflet_1 = require("react-leaflet");
require("./style.scss");
const SidePanel = ({ position = 'left', children, buttonColor = '#007bff', buttonIconColor = '#fff', panelBackgroundColor = '#fff', }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const map = (0, react_leaflet_1.useMap)();
    const togglePanel = () => {
        setIsOpen(!isOpen);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { className: `side-panel-button ${position} ${isOpen ? 'open' : ''}`, onClick: togglePanel, style: { backgroundColor: buttonColor, color: buttonIconColor } }), (0, jsx_runtime_1.jsx)("div", { className: `side-panel-container ${position} ${isOpen ? 'open' : ''}`, children: (0, jsx_runtime_1.jsx)("div", { className: "side-panel-content", style: { backgroundColor: panelBackgroundColor }, children: children }) })] }));
};
exports.default = SidePanel;
