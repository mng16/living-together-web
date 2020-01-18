import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';
import CardGroup from '../InfoCardGroup/InfoCardGroup';


class NavBar extends Component {
    render() {
        return (
            <header>
                <div className="logo"><Link to='/'>LIVING TOGETHER</Link></div>
                <nav>
                    <ul>
                        <li><Link to='/managePeople'>Manage People</Link></li>
                        <li><Link to="/manageInfo">Manage Info</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default NavBar;