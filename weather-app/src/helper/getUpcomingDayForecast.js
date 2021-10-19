import moment from 'moment';

const getWeekday = date => moment(date).format('dddd').substring(0,3);
const getDate = date => moment(date).format('MMMM Do');

//using slice to get data from the object key index start at 1
const getUpcomingDayForecast = data => data.slice(1).map (day => ({
    imgUrl: day.weather_state_abbr,
    maxTemp: Math.round(day.max_temp),
    minTemp: Math.round(day.min_temp),
    weekday: getWeekday(day.applicable_date),
    date: getDate(day.applicable_date),
}));

export default getUpcomingDayForecast;