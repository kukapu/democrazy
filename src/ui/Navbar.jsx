import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../store"
import './Navbar.css'

export const Navbar = () => {

    const dispatch = useDispatch()

    const [menuActive, setmenuActive] = useState(false)

    const onToggleMenu = () => {
        setmenuActive( !menuActive )
    }

    const onLogout = () => {
        dispatch( logout() )
    }

    return (
        <header className="header">
            <div className="row">
                <h1 className="header-h1">
                    <Link className="header-a" to='/'>Democrazy</Link>
                </h1>

                <button className="header-button" onClick={ onToggleMenu }>
                    Get Democracy?! 
                    <svg className="header-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>
                </button>
            </div>
            <div className="row">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="current-color" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                </svg>
                <svg onClick={ onLogout } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="current-color" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>

            </div>
            
            <nav className="header-nav">
                <ul className={ `header-ul ${ menuActive ? 'isActive' : ''}` } >
                    <Link onClick={ onToggleMenu } className="header-link" to='/compare'>Compare</Link>
                    <Link onClick={ onToggleMenu } className="header-link" to='/majority'>Majority</Link>
                    <Link onClick={ onToggleMenu } className="header-link" to='/ponderation'>Ponderacion</Link>
                </ul>
            </nav>

        </header>
    )
}
