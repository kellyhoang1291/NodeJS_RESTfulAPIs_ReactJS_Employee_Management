import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import "../css/Header.css"

const Header = () => {
    return (
        <div className="header">
            <p className="logo">Employee Management App</p>
            <div className="header-right">
                <Link to="/">
                    <p>Logout</p>
                </Link>
            </div>
        </div>
    )
}

export default Header