import React from "react";
import "../Estilos/Clear.css";

const Clear = (props) => (
    <div className="Clear" onClick={props.clearCtrl}>
        {props.children}
    </div>
);

export default Clear;