import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [questions, setQuestions] = useState([])
  const url = 'https://restcountries.com/v3.1/all?fields=name,capital,flag'
  async function requestData(){
    try {
        
        const respond = await axios.get(url)
        // su dung reduce method de loop tren moi object key se dung 1 ham de gop name, flag va capital thanh 1 cau hoi. sau do
        // return cau hoi do ra ngoai de set vao question state.
        // Su dung math.random * respond.data.length-1 de random key index ra.
        return respond.data.reduce((questions, item, index) => {
          if (item.flag !== '' && item.capital.length !== 0) {
            const {
              name: { common },
              flag,
              capital
            } = item
    
            questions.push({
              question: `What is the capital of ${common}?`,
              answer: capital[0]
            })
    
            questions.push({
              question: `Which country this flag ${flag} belongs to?`,
              answer: common
            })
          }
          
          return questions
        }, [])
    } catch (error) {
        
    }
}
const getQuestions = async () => {
  try {
    const data = await requestData()
    setQuestions([...data])
  } catch (err) {
    alert(`error`)
  }
}
useEffect(()=>{
  getQuestions();
  console.log(questions)
},[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
