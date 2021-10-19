import React, { useState } from 'react';
import PropTypes from 'prop-types'


const Form = ({submitSearch, isSearch , onSearch}) =>{
    const [location,setLocation] = useState('');
    const [locationList,setLocationList] = useState(['London','Berlin']);
    const onSubmit = (e) =>{
        e.preventDefault();
        if(!location || location === '') return;
        submitSearch(location)
        setLocationList(locationList => [...locationList,location])
        console.log(locationList)
        onSearch();
    }
    return (
        <div className={isSearch?"form-container form-display" : "form-container"}>
            <button className="btn-x" onClick={onSearch}>x</button>
            <form onSubmit={onSubmit}>
                <input 
                    aria-label="Location"
                    type="text"
                    placeholder="Search for location"
                    
                    onChange={e => setLocation(e.target.value)}
                    required
                ></input>
                <button type="submit" onClick={onSubmit}>Search</button>
            </form>
            <div className="list-container">
                {locationList.map((item) =>(
                    <button key={item} className="list-item" onClick={() => {submitSearch(item); onSearch()}}>{item}<i className="fas fa-chevron-right"></i></button>
                ))}
            </div>
        </div>
    )
}

Form.propTypes ={
    submitSearch: PropTypes.func.isRequired,
}

export default Form