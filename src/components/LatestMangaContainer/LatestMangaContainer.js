import React, { Component } from 'react';
import './LatestMangaContainer.css';

import TitleBar from '../TitleBar/TitleBar'
import DetailedPortraitList from '../DetailedPortraitList/DetailedPortraitList';

class LatestMangaContainer extends Component {


  render() {
    const { icon, title, items } = this.props;
    return (
        <div  className="LatestMangaContainer">
            <TitleBar cName="LatestMangaContainer__TitleBar" icon={icon} title={title} bg={"red"}/>
            <DetailedPortraitList items={items}/>
        </div>
    );
  }
}

export default LatestMangaContainer;