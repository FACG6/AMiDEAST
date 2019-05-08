import React, { Component } from 'react'

import SideBar from '../SideBar'
import Header from '../Header'

export default class SideNav extends Component {

  state = {
    menuOpen: false
  }

  handleLinkClick = () => {
    this.setState({ menuOpen: false });
  };

  handleMenuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {

    const { menuOpen } = this.state;
    const { handleMenuClick, handleLinkClick } = this;

    return (
      <div>
        <Header handleMenuClick={handleMenuClick} menuOpen={menuOpen} />
        <SideBar
          handleLinkClick={handleLinkClick}
          menuOpen={menuOpen}
          history={this.props.history}
        />

      </div>
    )
  }
}
