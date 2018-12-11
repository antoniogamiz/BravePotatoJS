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
    let nPortraits = Math.floor(currentWidth / 100) - 1;

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
        <div ref={this.target} className="PortraitList">
        { portraits.map( (v,i) => 
            <div key={i} className="PortraitList__Item">
                <img className="PortraitList__Item__Img" key={i} src={v} alt=""></img> 
                <p className="PortraitList__Item__Name">One Piece Chapter aaaa</p>
            </div>
        )}
        </div>
      );   
  }
}

export default PortraitList;


