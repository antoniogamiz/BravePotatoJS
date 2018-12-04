import React, {Component} from 'react';
import './Search.css';


class Search extends Component {
    render() {
        const { src } = this.props;
        return (
            <a className="Search" href="#">
                <img src={src} alt=""></img>
            </a>
        );
    }
}

export default Search;