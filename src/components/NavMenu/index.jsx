import React from "react";
import './NavMenu.css';

export default function NavMenu(props) {
  return (
    <>
      <nav>
        <ul style={{flexDirection: props.direction}}>
          <li style={{fontSize: props.fontSize}}>Home</li>
          <li style={{fontSize: props.fontSize}}>Vistoria</li>
          <li style={{fontSize: props.fontSize}}>Sobre nós</li>
        </ul>
      </nav>
    </>
  );
}
