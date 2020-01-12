import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/manageInfo">Manage Info</Link></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;