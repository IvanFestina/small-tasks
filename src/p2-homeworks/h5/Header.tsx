import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"


function Header() {


    return (
        <header className={s.header}>
            <nav className={s.menu}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <NavLink to={'/pre-junior'} className={s.link}  >Pre-Junior</NavLink>
                    </li>

                    <li className={s.item}>
                        <NavLink to={'/junior'} className={s.link}>Junior</NavLink>
                    </li>

                    <li className={s.item}>
                        <NavLink to={'/junior-plus'} className={s.link}>Junior-Plus</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={s.square}>Menu</div>

        </header>
    )
}

export default Header
