import React, { Component } from 'react';
import './MobNavBar.css';

import NavBarList from '../NavBarList/NavBarList';

import NavIcon from '../NavIcon/NavIcon';



class MobNavBar extends Component {

  constructor(props) {
    super(props);

    this.onClik = this.onClick.bind(this);
  }

  state = {
    show: false
  }

  onClick = () => this.setState({ show: !this.state.show })

  render() {
    const { imgLogo, imgLogoFont, menuEntries } = this.props;
    const { show } = this.state;

    return (
          <div className="MobNavBar">
            <NavIcon icon={imgLogo} iconFont={imgLogoFont}/>
            <button onClick={this.onClick}>MENU</button>
            { show ? <NavBarList items={menuEntries} /> : ""}
          </div>
    );
  }
}

export default MobNavBar;