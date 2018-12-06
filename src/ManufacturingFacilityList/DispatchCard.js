import React from 'react'
import { Chart } from "react-charts";

const DispatchCard = ({ name, state, speed, efficiency, ispatch, id }) => {
    return (
        <div className='center'>
            <div className='w5 grow bgOK white br3 pa3 ma2 dib bw2 shadow-5'>
                <h2 className='center'>Диспетчерское Бюро</h2>
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
                                    data: [[0, 1], [1, 3], [2, 2], [3, 6], [4, 7]],
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

export default DispatchCard