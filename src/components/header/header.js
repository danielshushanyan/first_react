import React, { Component } from 'react';
import './header.scss'

class Header extends Component {
    render() {
        return (
            <header className="page__header header">
                <div className="header__logo"/>
                <div className="header__stamp"/>
                <div className="header__title-img"/>
            </header>
        );
    }
}

export default Header;
