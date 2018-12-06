import React from 'react'
import ManufacturingCard from './ManufacturingCard'

const ManufacturingFacilityList = ({list}) => {
    return (
        <div>
            <br />
            <div className=''>
                <div className='tc'>
                    {
                        list.map((user, i) => {
                            return (
                                <div className='dib'>
                                    <ManufacturingCard
                                        key={i}
                                        id={list[i].id}
                                        name={list[i].name}
                                        state={list[i].state}
                                        speed={list[i].speed}
                                        efficiency={list[i].efficiency}
                                        worker={list[i].worker}
                                    />
                                    {/* <WorkerCard
                                        key={i}
                                        id={list[i].id}
                                        name={list[i].name}
                                        state={list[i].state}
                                        speed={list[i].speed}
                                        efficiency={list[i].efficiency}
                                        worker={list[i].worker}
                                    />
                                    <DispatchCard
                                        key={i}
                                        id={list[i].id}
                                        name={list[i].name}
                                        state={list[i].state}
                                        speed={list[i].speed}
                                        efficiency={list[i].efficiency}
                                        worker={list[i].worker}
                                    /> */}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ManufacturingFacilityList