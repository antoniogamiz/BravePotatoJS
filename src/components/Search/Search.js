import React, {Component} from 'react';
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
            <div className="Search">
                { /* eslint-disable-next-line */ }
                <a  onClick={this.onClick} href="#">
                    <img src={src} alt="" className="Search__ItemIcon"></img>
                </a>
                <ReactCSSTransitionGroup
                    transitionName="scrollingDown"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {show ? <SearchBar/> : ""}
                </ReactCSSTransitionGroup>
            </div>

        );
    }
}

export default Search;