

const getCurrentDayDataForeCast = data =>[
    {
        name: 'Humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'Wind status',
        value: Math.round(data.wind_speed),
        unit: 'mph',
    },
    {
        name: 'Air Pressure',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'Visibility',
        value: (data.visibility).toFixed(1),
        unit: 'miles',
    },
]

export default getCurrentDayDataForeCast;