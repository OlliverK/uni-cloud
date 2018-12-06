import React from 'react'


const Navbar = ({ onRouteChange }) => {


    return (
        <nav className='fixed shadow-5'>
            <div className='form dt dt--fixed navbar'>
                <h1 className='tOK tl dtc pasides pointetr' onClick={() => onRouteChange('main')}>Uni-Cloud</h1>
                <div className='dtc tr'>
                    <h5 onClick={() => onRouteChange('stats')} className='tr pasides inline white f4 pointer'> Статистика </h5>
                    <h5 onClick={() => onRouteChange('selary')} className='tr pasides inline white f4 pointer'> Зарплата </h5>
                    <h5 onClick={() => onRouteChange('testing')} className='tr pasides inline white f4 pointer'> Testing </h5>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


