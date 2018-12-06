import React from 'react'

const MainMachineCard = ({name, state, speed, efficiency, worker, id}) => {
    return (
        <div className='inline'>
            <div className='cardheight w5 grow bgOK white br4 pa3 ma2 dib bw2 shadow-5'>
                <h2 className='center'>{name}</h2>
                <div>
                    <div className='center'>
                        <h3 className='dtc'>Состояние:</h3>
                        <h4 className='dtc'> {state}</h4>
                    </div>
                    <div className='center'>
                        <h3 className='dtc'>Скорость:</h3>
                        <h4 className='dtc'> {speed}</h4>
                    </div>
                    <div className='center'>
                        <h3 className='dtc'>КПД:</h3>
                        <h4 className='dtc'> {efficiency}</h4>
                    </div>
                    <div className='center'>
                        <h3 className='dtc'>Рабочий:</h3>
                        <h4 className='dtc'> {worker}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMachineCard