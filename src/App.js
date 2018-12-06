import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import Tree from './Tree'
import Statistics from './Statistics'
import Selary from './Selary'
import Main from './Main'
import { list } from './ManufacturingFacilityList/List'
import Particles from 'react-particles-js';
import LeshaTesting from './LeshaTesting'

const particlesLogo = {
  "fps_limit": 28,
  "particles": {
      "number": {
          "value": 200,
          "density": {
              "enable": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 30,
          "opacity": 0.4
      },
      "move": {
          "speed": 1
      },
      "opacity": {
          "anim": {
              "enable": true,
              "opacity_min": 0.05,
              "speed": 2,
              "sync": false
          },
          "value": 0.4
      }
  },
  "polygon": {
      "enable": true,
      "scale": 0.5,
      "type": "inline",
      "move": {
          "radius": 10
      },
      "url": "/beard.svg",
      "inline": {
          "arrangement": "equidistant"
      },
      "draw": {
          "enable": true,
          "stroke": {
              "color": "rgba(255, 255, 255, .6)"
          }
      }
  },
  "retina_detect": false,
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          }
      },
      "modes": {
          "bubble": {
              "size": 6,
              "distance": 40
          }
      }
  }
}

  


const particlesBackground = {
  "particles": {
    "number": {
        "value": 150
    },
    "size": {
        "value": 5
    }
},
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
      }
    }
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      searchfield: '',
      route: 'main'
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
    console.log(route);
  }

  render() {
    const { route } = this.state;
    return (
      <div>
        <Particles className='particles'
          params={particlesBackground}
        />
        <Navbar onRouteChange={this.onRouteChange} />
        <Tree onRouteChange={this.onRouteChange}/>
        <div className='side'>
          {
            route === 'main'
              ? (
                <Main onRouteChange={this.onRouteChange} />
              ) : (route === 'stats'
                ? (
                  <Statistics onRouteChange={this.onRouteChange} />
                ) : (route === 'selary'
                    ? (
                      <Selary onRouteChange={this.onRouteChange} />
                  ) : (
                      <LeshaTesting />
                    )
                )
              )
          }
        </div>
        </div>
    );
  }
}

export default App;
