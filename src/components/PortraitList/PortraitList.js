import React, { Component } from 'react';

import './PortraitList.css';

class PortraitList extends Component {

  /**
   * This will be a HOC at some point.
   */
  constructor(props) {
    super(props);
    this.target = React.createRef();

    this.portraits = this.props.portraits;

    this.state = {
      portraits: [],
    }
  }

  updatePortraitsList() {
    let currentWidth = this.target.current.offsetWidth;
    let nPortraits = Math.floor(currentWidth / 120);

    this.setState({ portraits: this.portraits.slice(0, nPortraits) });
  }

  componentDidMount() {
    this.updatePortraitsList();
    window.addEventListener('resize', this.updatePortraitsList.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePortraitsList.bind(this));
  }

  render() {
      const { portraits } = this.state;
      return (
        <div ref={this.target} className="portrait-list">
        { portraits.map( (v,i) => 
            <div key={i} className="portrait-list__item">
                <img className="portrait-list__item__img" key={i} src={v} alt=""></img> 
                <p className="portrait-list__item__name">One Piece Chapter aaaa</p>
            </div>
        )}
        </div>
      );   
  }
}

export default PortraitList;


