import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Search.css';

import SearchBar from '../SearchBar/SearchBar'

class Search extends Component {
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    state = {
        show: false
    }

    onClick = () => this.setState( {show: !this.state.show} );

    render() {
        const { src } = this.props;
        const { show } = this.state;
        return (
            <Fragment>
                <a  onClick={this.onClick} className="Search" href="#">
                    <img src={src} alt=""></img>
                </a>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {show ? <SearchBar/> : ""}
                </ReactCSSTransitionGroup>
            </Fragment>

        );
    }
}

export default Search;