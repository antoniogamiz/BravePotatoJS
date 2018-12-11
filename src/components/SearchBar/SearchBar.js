import React, { Component } from 'react';
import './SearchBar.css'
import icon from '../../theme/img/search-engine.svg'

class SearchBar extends Component {

    render() {
        return (
            <form className="SearchBar">
                <img className="SearchBar__Icon" src={icon} alt=""></img>
                <input className="SearchBar__Input" type="text" placeholder="Search"></input>
                <p className="SearchBar_Tags">tags</p>
            </form>        
        );
    }
}

export default SearchBar;