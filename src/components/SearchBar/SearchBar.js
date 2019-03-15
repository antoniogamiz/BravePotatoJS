import React, { Component } from "react";
import "./SearchBar.css";
// import icon from "/static/theme/img/search-engine.svg";

class SearchBar extends Component {
  render() {
    return (
      <form className="search-bar">
        <img
          className="search-bar__icon"
          src={"/static/theme/img/search-engine.svg"}
          alt=""
        />
        <input className="search-bar__input" type="text" placeholder="Search" />
        <p className="search-bar__tags">tags</p>
      </form>
    );
  }
}

export default SearchBar;
