import React, { Component } from 'react';

class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manuf: false,
            fas1: false,
            searchfield: '',
            route: '', 
        }
    }
    onManufChange = (manuf) => {
        this.setState({ manuf: !manuf });
        console.log(manuf);
    }
    onFas1Change = (fas1) => {
        this.setState({ fas1: !fas1 });
        console.log(fas1);
    }
    // onRouteChange = (route) => {
    //     this.setState({ route: 'stats' });
    //     console.log(route);
    //   }
    render() {
        const { manuf, fas1, route } = this.state;
        return (
            <div className='tree treefixed dgOK bg-unidark'>
                <h2 onClick={() => this.onManufChange(manuf)} className='patop paleft pointer grow'>Производство</h2>
                {
                    manuf === true
                        ? (
                            <div >
                                <h3 onClick={() => this.onFas1Change(fas1)} className='paleft2 grow pointer'>Цех 1</h3>
                                {
                                    fas1 === true
                                        ? (
                                            <div >
                                                <h4 onClick={() => this.props.onRouteChange('stats')} className='paleft4 grow pointer'>Печать</h4>
                                                <h4 onClick={() => this.props.onRouteChange('stats')} className='paleft4 grow pointer'>Ламинация</h4>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )
                                }
                                <h4 className='paleft2 grow pointer'>Цех 2</h4>
                            </div>
                        ) : (
                            <div></div>
                        )
                }
                <h2 onClick={() => this.props.onRouteChange('selary')} className=' paleft pointer grow'>Зарплата</h2>
            </div>
        )
    }
}

export default Tree


