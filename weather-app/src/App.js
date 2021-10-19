import './App.scss';
import Form from "./component/Form"
import { useEffect, useState } from 'react';
import useForecast from './hooks/useForecast';
import CurrentDay from './component/CurrentDay';
import UpcomingDay from './component/UpcomingDay';
import TodayHightlight from './component/TodayHightlight';

function App() {
  const [isSearch,setIsSearch] = useState(false);
  const {isError,forecast,submitRequest,submitRequestLatLong} = useForecast();
  const [Convert,setConvert] = useState(false);
  const onSubmit = (value) =>{
    submitRequest(value)
  }
  const onSubmitLatLong = (lat,long) =>{
    submitRequestLatLong(lat,long)
  }
  const onSearch = () =>{
    if(!isSearch){
      setIsSearch(true)
    }else{
      setIsSearch(false)
    }
    console.log(isSearch)
  }
  const onConvert = () =>{
    if(!Convert){
      setConvert(true)
    }else{
      setConvert(false)
    }
    console.log(Convert)
  }
  useEffect(() =>{
    const location = "Berlin"
    submitRequest(location)
  },)
  return (
    <div className="App">
      <Form submitSearch={onSubmit} isSearch={isSearch} onSearch={onSearch}></Form>
      <CurrentDay forecast={forecast} onSearch={onSearch} onSubmitLatLong={onSubmitLatLong} isConvert={Convert}/>
      {isError && isError}
      <div className="Content-Right">
        <UpcomingDay forecast={forecast} onConvert={onConvert} isConvert={Convert}></UpcomingDay>
        <TodayHightlight forecast={forecast}></TodayHightlight>
      </div>
    </div>
  );
}

export default App;
