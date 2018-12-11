import React, { Component } from 'react';
import './PopularMangaContainer.css';

import TitleBar from '../TitleBar/TitleBar'
import PortraitList from '../PortraitList/PortraitList';

class PopularMangaContainer extends Component {

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
      const {icon, title} = this.props;      
      const { portraits } = this.state;
      return (
        <div ref={this.target} className="PopularMangaContainer">
            <TitleBar cName="PopularMangaContainer__TitleBar" icon={icon} title={title} />
            <PortraitList items={portraits}/>
        </div>  
    );   
  }
}

export default PopularMangaContainer;