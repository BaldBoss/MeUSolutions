import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import useGeoLocation from '../hooks/useGeoLocation';
function CurrentDay({forecast, onSearch,onSubmitLatLong, isConvert}) {
    useEffect(() =>{
    },[forecast])
    const location = useGeoLocation();
    const getLocation = () =>{
        onSubmitLatLong(location.coordinates.lat,location.coordinates.lng)
        console.log(location.coordinates.lng)
        console.log(location.coordinates.lat)
    }
    return (
        <div className="CurrentDay-Containter">
            <div className="btn-wrap">
                <button className="search-btn" onClick={onSearch}>Search for places</button>
                <button className="location-btn" onClick={getLocation} ><i className="fas fa-location"></i></button>
            </div>
            <div className="content-wrap">
                <div className="cloud">
                    {forecast && <img src={`${forecast.currentDay.weatherIcon}`} className="weather-icon"></img>}
                </div>
                {forecast && isConvert ? <h1>{Math.round((forecast.currentDay.temperature*1.8)+32)}<span>&#8457;</span></h1>:
                <h1>{forecast.currentDay.temperature}<span>&#8451;</span></h1>}
                {forecast && <h3>{forecast.currentDay.weatherDescription}</h3>}
                <div className="content-footer">
                    {forecast && <h5 className="content-footer__time">Today . {forecast.currentDay.weekday},{forecast.currentDay.date}</h5>}
                    {forecast && <h5 className="content-footer__location"><i className="fas fa-map-marker-alt"></i> {forecast.currentDay.location}</h5>}
                </div>
            </div>   
            
        </div>
    )
}


export default CurrentDay
