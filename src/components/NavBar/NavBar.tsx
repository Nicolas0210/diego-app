import React from 'react'
import { ReactComponent as MenuDesplegable } from "../../assets/menu-desplegable.svg"
import { ReactComponent as LogoBim } from "../../assets/white0.svg"
import "./NavBar.scss"

export default function NavBar (){
    const [isMenuVisible, setIsMenuVisible] = React.useState(false)

    const menuVisbility = React.useCallback(() => {
            setIsMenuVisible(!isMenuVisible)
        }, [isMenuVisible]
    )
    

    return(
        <nav className="navbar">
            <div className="navBar-btn-ul-container">
                <LogoBim/>
                <div 
                    className="navBar-menu-btn"
                    onClick={menuVisbility}
                >
                    <MenuDesplegable/>
                </div>
                <ul className={
                        `navBar-ulist ${isMenuVisible ? "visible" : "hidden"}`
                    }>
                    <li className="navBar-list-item">Home</li>
                    <li className="navBar-list-item">Clientes</li>
                    <li className="navBar-list-item">Brain in Motion</li>
                    <li className="navBar-list-item">Modelo</li>
                    <li className="navBar-list-item">Contacto</li>
                </ul>
            </div>
        </nav>
    )
}