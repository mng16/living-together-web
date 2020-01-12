import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';


class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>LIVING TOGETHER</Link></li>
                    <li><Link to="/manageInfo">Manage Info</Link></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;