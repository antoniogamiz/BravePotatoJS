import React, { Component } from 'react';
import './PopularMangaContainer.css';

import TitleBar from '../TitleBar/TitleBar'
import PortraitList from '../PortraitList/PortraitList';

class PopularMangaContainer extends Component {
  render() {
      const {icon, title, portraits} = this.props;      
      return (
        <div className="PopularMangaContainer">
            <TitleBar cName="PopularMangaContainer__TitleBar" icon={icon} title={title} />
            <PortraitList items={portraits}/>
        </div>  
    );   
  }
}

export default PopularMangaContainer;