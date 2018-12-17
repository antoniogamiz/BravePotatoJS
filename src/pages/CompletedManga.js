import React, { Component } from "react";

import "./CompletedManga.css";

import { items, portraits, popIcon, latIcon } from "../randomData";

// Components
import SearchBar from "../components/SearchBar/SearchBar";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import PortraitList from "../components/PortraitList/PortraitList";
import DoubleColumnFlexList from "../components/DoubleColumnFlexList/DoubleColumnFlexList";
import Footer from "../components/Footer/Footer";
import PortraitDisplay from "../components/PortraitDisplay/PortraitDisplay";
import Synopsis from "../components/Synopsis/Synopsis";

// import fetchHome from '../fetching/homeFetch' still working on it

class Completed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularItems: [],
      completedItems: []
    };
  }

  componentDidMount() {
    // fetchHome(); still working on it
  }

  render() {
    let completedItemsToRender = items.map((v, i) => (
      <PortraitDisplay src={v.src} size={{ width: "112px", height: "175px" }}>
        <Synopsis manga={v} />
      </PortraitDisplay>
    ));
    return (
      <div className="completed-container">
        <div className="completed-main-container">
          <div className="searchbar-container-item">
            <SearchBar />
          </div>
          <div className="popular-manga-container-item">
            <SectionContainer
              icon={popIcon}
              title={"Popular Manga"}
              bg={"rgb(140, 132, 185)"}
            >
              <PortraitList portraits={portraits} />
            </SectionContainer>
          </div>
          <div className="completed-manga-container-item">
            <SectionContainer
              icon={latIcon}
              title={"Completed Manga"}
              bg={"red"}
            >
              <DoubleColumnFlexList items={completedItemsToRender} />
            </SectionContainer>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Completed;
