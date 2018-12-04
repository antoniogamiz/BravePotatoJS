import React, {Component} from 'react';
import './Search.css';


//TODO: change this component to functional.
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