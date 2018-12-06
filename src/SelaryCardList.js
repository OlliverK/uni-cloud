import React from 'react'
import SelaryCard from './SelaryCard'

const SelaryCardList = ({selarylist}) => {
    return (
        <div>
            <br />
            <div className=''>
                <div className='tc'>
                    {
                        selarylist.map((user, i) => {
                            return (
                                <div className='dib'>
                                    <SelaryCard
                                        key={i}
                                        id={selarylist[i].id}
                                        today={selarylist[i].today}
                                        daylyaverage={selarylist[i].daylyaverage}
                                        midwayselary={selarylist[i].midwayselary}
                                        finalselary={selarylist[i].finalselary}
                                        worker={selarylist[i].worker}
                                    />
                                    {/* <WorkerCard
                                        key={i}
                                        id={selarylist[i].id}
                                        name={selarylist[i].name}
                                        state={selarylist[i].state}
                                        speed={selarylist[i].speed}
                                        efficiency={selarylist[i].efficiency}
                                        worker={selarylist[i].worker}
                                    />
                                    <DispatchCard
                                        key={i}
                                        id={selarylist[i].id}
                                        name={selarylist[i].name}
                                        state={selarylist[i].state}
                                        speed={selarylist[i].speed}
                                        efficiency={selarylist[i].efficiency}
                                        worker={selarylist[i].worker}
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

export default SelaryCardList