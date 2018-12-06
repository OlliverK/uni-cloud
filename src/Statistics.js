import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import ManufacturingFacilityList from './ManufacturingFacilityList/ManufacturingFacilityList'
import Scroll from './Scroll'
import SearchBox from './SearchBox'
import {list} from './ManufacturingFacilityList/List'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { list, searchfield} = this.state;
    const filtered = list.filter(list =>{
      return list.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div className=''>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ManufacturingFacilityList list={filtered} />
        </Scroll>
      </div>
    );
  }
}

export default App;
