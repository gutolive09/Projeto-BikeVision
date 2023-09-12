import React from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";

export default function NavMenu(props) {
  return (
    <>
      <nav>
        <ul style={{ flexDirection: props.direction }}>
          <li>
            <Link>
              <p className="item" style={{ fontSize: props.fontSize }}>
                Home
              </p>
            </Link>
          </li>

          <li style={{ fontSize: props.fontSize }}>
            <Link>
              <p className="item" style={{ fontSize: props.fontSize }}>
                Vistoria
              </p>
            </Link>
          </li>

          <li style={{ fontSize: props.fontSize }}>
            <Link>
              <p className="item" style={{ fontSize: props.fontSize }}>
                Sobre nós
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
