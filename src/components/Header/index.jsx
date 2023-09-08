import React from 'react'
import Logo from '../../assets/LogoBikeVision.png'
import './Header.css'
import NavMenu from '../NavMenu'

export default function Header() {
  return (
    <>
        <header>
            <div>
                <img src={Logo} alt="Logo da BikeVision" />
            </div>
            <NavMenu/>
        </header>
    </>
  )
}
