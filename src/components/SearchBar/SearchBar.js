import React, { Component } from 'react';
import './SearchBar.css'
import icon from '../../img/search-engine.svg'

class SearchBar extends Component {

    render() {
        const { className } = this.props;
        return (
            <form className={className}>
                <img src={icon} alt=""></img>
                <input type="text" placeholder="Search"></input>
                <p>tags</p>
            </form>        
        );
    }
}

export default SearchBar;