import { useState } from "react"
import axios from 'axios'

import getCurrentDatForecast from "../helper/getCurrentDatForecast"
import getUpcomingDayForecast from "../helper/getUpcomingDayForecast"
import getCurrentDayDataForeCast from "../helper/getCurrentDayDataForeCast"

const BASE_URL = 'https://www.metaweather.com/api/location'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`

const useForecast = () =>{
    const [isError,setError] = useState(false)
    const [forecast,setForecast] = useState(null)

    const getWoeid = async location =>{
        //get woeid where on earth id
        const {data} = await axios(`${REQUEST_URL}/search`, {params: {query: location}})
        if(!data || data.length === 0){
            setError("There no such location");
            return ;
        }
        return data[0]
    }
    const getWoeidLatLong = async (lat,long) =>{
        //get woeid where on earth id
        const latlong=`${lat},${long}`;
        console.log(latlong)
        const {data} = await axios(`${REQUEST_URL}/search`, {params: {lattlong: latlong}})
        if(!data || data.length === 0){
            setError("There no such location");
            return ;
        }
        return data[0]
    }

    const getForecastData = async (woeid) =>{
        const {data} = await axios(`${REQUEST_URL}/${woeid}`)
        if(!data || data.length === 0){
            setError("Something wrong")
            return;
        }
        return data
    }

    //gather forecast data
    const gatherForeCastData = (data) =>{
        const currentDay = getCurrentDatForecast(data.consolidated_weather[0], data.title);
        const currentDayData = getCurrentDayDataForeCast(data.consolidated_weather[0]);
        const UpcomingDay = getUpcomingDayForecast(data.consolidated_weather);

        setForecast({currentDay,currentDayData,UpcomingDay})
    }

    const submitRequestLatLong = async (lat,long) =>{
        try {
        const response = await getWoeidLatLong(lat,long)
        if(!response?.woeid) return;
        console.log(response)
        const data = await getForecastData(response.woeid)
        if(!data) return;
        gatherForeCastData(data);
        
        setError(false)
        console.log({forecast})
        } catch (error) {
            
        }
    }
    //call api
    const submitRequest = async location =>{
        try {
        const response = await getWoeid(location)
        if(!response?.woeid) return;

        const data = await getForecastData(response.woeid)
        if(!data) return;
        gatherForeCastData(data);
        
        setError(false)
        } catch (error) {
            
        }
    }
    return{
        isError,forecast,submitRequest,submitRequestLatLong,
    }
}

export default useForecast