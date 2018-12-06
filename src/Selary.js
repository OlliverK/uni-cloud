import React, { Component } from 'react';
import './App.css';
import SelaryCardList from './SelaryCardList'
import Scroll from './Scroll'
import SearchBox from './SearchBox'
import {selarylist} from './SelaryList'

class Selary extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selarylist: selarylist,
        searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { selarylist, searchfield} = this.state;
    const filtered = selarylist.filter(selarylist =>{
      return selarylist.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div className=''>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <SelaryCardList selarylist={filtered} />
        </Scroll>
      </div>
    );
  }
}

export default Selary;
