import React from 'react'

const ManufacturingCard = ({today, daylyaverage, midwayselary, finalselary, speed, efficiency, worker, id}) => {
    return (
        <div className='center'>
            <div className='w5 grow bgOK white br4 pa3 ma2 dib bw2 shadow-5'>
                <h2 className='center'>{worker}</h2>
                <div>
                    <div className='center'>
                        <h3 className='dtc'>Сегодня:</h3>
                        <h4 className='dtc'> {today}</h4>
                    </div>
                    <div className='center'>
                        <h3 className='dtc'>Средняя:</h3>
                        <h4 className='dtc'> {daylyaverage}</h4>
                    </div>
                    <div className='center'>
                        <h3 className='dtc'>Предоплата:</h3>
                        <h4 className='dtc'> {midwayselary}</h4>
                    </div>
                    <div className='center'>
                        <h3 className='dtc'>Зартлата:</h3>
                        <h4 className='dtc'> {finalselary}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManufacturingCard