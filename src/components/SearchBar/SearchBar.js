import React, { Component } from 'react';
import './SearchBar.css'
import icon from '../../img/search-engine.svg'

class SearchBar extends Component {
    render() {
        return (
            <form className="SearchBar">
                <img src={icon} alt=""></img>
                <input type="text" placeholder="Search"></input>
                <p>tags</p>
            </form>
        );
    }
}

export default SearchBar;