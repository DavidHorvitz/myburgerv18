import React from "react";
import './BuildControl.css';
const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button
            className="Lass" onClick={props.removed} disabled={props.disabled}>Lass -</button>
        <button
            className="More" onClick={props.added}>More +</button>
    </div>
);
export default buildControl;
