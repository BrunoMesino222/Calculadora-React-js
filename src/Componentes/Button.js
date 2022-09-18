import React from "react";
import "../Estilos/Button.css"

function Button(props){
  const esOperador = valor => {
    // eslint-disable-next-line
    return isNaN(valor) && (valor != ".") && (valor != "=");
  }

  return(
    <div
      className={`contButton ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}
          onClick={() => props.clickCtrl(props.children)}>
          {props.children}
        </div> 
    )

}

export default Button;