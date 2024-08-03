import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo1 from '../images/logo.png';
import './Component.css';

const Header = () => {
    return (
        <div className="container-fluid header-ground">
            <nav className="navbar navbar-expand-sm">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={Logo1} alt="Logo" className="thumbnail img-filter" style={{ height: '100px', width: '100px' }} />
                    </NavLink>
                    
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/fitness">Fitness</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/study">Study</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/romance">Romance</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/podcast">Podcast</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/other">Others</NavLink>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
            
        </div>
    );
}

export default Header;
