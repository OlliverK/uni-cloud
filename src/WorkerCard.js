import React from 'react'
import { Chart } from "react-charts";

const WorkerCard = ({ name, state, speed, efficiency, worker, id }) => {
    return (
        <div className=' inline'>
            <div className='cardheight w5 grow bgOK white br4 pa3 ma2 dib bw2 shadow-5'>
                <h2 className='center'>{worker}</h2>
                <div>
                    <div className='center'>
                        <h3 className='dtc'>КПД:</h3>
                        <h4 className='dtc'> {efficiency}</h4>
                    </div>
                    <div
                        className='tOK'
                        style={{
                            width: "200px",
                            height: "200px",
                            
                        }}
                    >
                        <Chart
                            data={[
                                {
                                    borderColor: "red",
                                    label: "Series 1",
                                    data: speed,
                                    borderWidth: 5
                                },
                                
                            ]}
                            axes={[
                                { primary: true, type: "linear", position: "bottom" },
                                { type: "linear", position: "left", }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkerCard