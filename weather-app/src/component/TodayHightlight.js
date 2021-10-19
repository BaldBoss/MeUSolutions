import React, { useEffect } from 'react'

function TodayHightlight({forecast}) {
    useEffect(() =>{
        if(forecast){
            console.log(forecast.currentDayData)
        }
    },[forecast])
    return (
        <div className="TodayHightlight-container">
            <h1>Today's Hightlights</h1>
            <div className="hightlight-wrapper">
                <div className="hightlight-box">
                    {forecast &&<h3>{forecast.currentDayData[1].name}</h3>}
                    {forecast &&<h1>{forecast.currentDayData[1].value}{forecast.currentDayData[1].unit}</h1>}
                    <p><i className="fas fa-compass"></i> WSW</p>
                </div>
                <div className="hightlight-box">
                    {forecast &&<h3>{forecast.currentDayData[0].name}</h3>}
                    {forecast &&<h1>{forecast.currentDayData[0].value}{forecast.currentDayData[0].unit}</h1>}
                    <div className="bar-container">
                        <div className="bar-progress" style={forecast && {width:`${forecast.currentDayData[0].value}%`}}></div>
                    </div>
                </div>
                <div className="hightlight-box">
                    {forecast &&<h3>{forecast.currentDayData[3].name}</h3>}
                    {forecast &&<h1>{forecast.currentDayData[3].value} {forecast.currentDayData[3].unit}</h1>}
                </div>
                <div className="hightlight-box">
                    {forecast &&<h3>{forecast.currentDayData[2].name}</h3>}
                    {forecast &&<h1>{forecast.currentDayData[2].value} {forecast.currentDayData[2].unit}</h1>}

                </div>
                
            </div>
           
            
        </div>
    )
}

export default TodayHightlight
