import React from 'react'
import MainMachineCard from './MainMachineCard'
import WorkerCard from './WorkerCard'


const MainCardList = ({ mainlist }) => {
    return (
        <div>
            <br />
            <div className=' patop '>
                <div className='tc '>
                    <div className='center'>
                        {
                            mainlist.map((user, i) => {
                                return (
                                    <div>
                                        {/* <div className='dib'>
                                            <MainMachineCard

                                                key={i}
                                                key={i}
                                                id={mainlist[i].id}
                                                name={mainlist[i].name}
                                                state={mainlist[i].state}
                                                speed={mainlist[i].speed}
                                                efficiency={mainlist[i].efficiency}
                                                worker={mainlist[i].worker}
                                            />
                                        </div> */}
                                        <div className=''>
                                            <WorkerCard

                                                key={i}
                                                id={mainlist[i].id}
                                                name={mainlist[i].name}
                                                state={mainlist[i].state}
                                                speed={mainlist[i].speed}
                                                efficiency={mainlist[i].efficiency}
                                                worker={mainlist[i].worker}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCardList