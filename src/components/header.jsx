import React, { Component } from "react";
import logo from "../img/imlsw96.png";

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="asdf" className="header__logo" />
        <span className="header__title">SunTube</span>
        <form className="header__form">
          <input
            type="text"
            className="header__search"
            placeholder="검색하실 키워드를 입력하세요.."
          />
          <button className="header__showBtn">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </header>
    );
  }
}

export default Header;
