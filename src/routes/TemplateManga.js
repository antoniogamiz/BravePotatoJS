import React, { Component } from "react";

import "./TemplateManga.css";

import { items, portraits, popIcon, latIcon } from "../randomData";

// Components
import SearchBar from "../components/SearchBar/SearchBar";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import PortraitList from "../components/PortraitList/PortraitList";
import DetailedPortraitList from "../components/DetailedPortraitList/DetailedPortraitList";
import Footer from "../components/Footer/Footer";

// import fetchHome from '../fetching/homeFetch' still working on it

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularItems: [],
      latestItems: []
    };
  }

  componentDidMount() {
    // fetchHome(); still working on it
  }

  render() {
    return (
      <div className="latest-container">
        <div className="latest-main-container">
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
          <div className="latest-manga-container-item">
            <SectionContainer icon={latIcon} title={"Latest Manga"} bg={"red"}>
              <DetailedPortraitList items={items} />
            </SectionContainer>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
