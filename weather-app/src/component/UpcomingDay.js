import React, { useEffect } from 'react'

const imgUrlBase = 'https://www.metaweather.com/static/';

function UpcomingDay({forecast,onConvert,isConvert}) {
    useEffect(() =>{
    },[forecast])
    return (
        <div className="upcomingDay-container">
            <div className="convert-btn">
                {!isConvert ? <button className="c-btn active" disabled>&#8451;</button> : <button onClick={onConvert} className="c-btn">&#8451;</button>}
                
                {isConvert ?<button className="c-btn active" disabled>&#8457;</button> : <button onClick={onConvert} className="c-btn">&#8457;</button>}
            </div>
            {forecast && forecast.UpcomingDay.map((item) =>(
                <div className="upcomingDay-card" key={item.weekday}>
                    <h5>{item.weekday},{item.date}</h5>
                    <img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${item.imgUrl}.svg`} alt="" />
                    {isConvert ? (
                        <div className="minmax-temp">
                            <p className="max">{Math.round((item.maxTemp*1.8)+32)}&#8457;</p>
                            <p className="min">{Math.round((item.minTemp*1.8)+32)}&#8457;</p>
                        </div>
                    ):(
                        <div className="minmax-temp">
                            <p className="max">{item.maxTemp}&#8451;</p>
                            <p className="min">{item.minTemp}&#8451;</p>
                        </div>
                    )}

                </div>
            ))}
        </div>
    )
}

export default UpcomingDay
