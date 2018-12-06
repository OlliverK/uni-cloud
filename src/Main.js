import React, { Component } from 'react';
import './App.css';
import MainCardList from './MainCardList'
import {mainlist} from './MainList'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mainlist: mainlist,
        searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { mainlist, searchfield} = this.state;
    const filtered = mainlist.filter(mainlist =>{
      return mainlist.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div className=''>
          <MainCardList mainlist={filtered} />
      </div>
    );
  }
}

export default Main;
