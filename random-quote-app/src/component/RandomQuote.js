import React, { useEffect, useState } from 'react'
import axios from 'axios'

function RandomQuote() {
    const [quote, setQuote] = useState({});
    const [author, setAuthor] = useState('');
    const [quoteList, SetQuoteList] = useState([]);
    useEffect(()=>{
        fetchRandomQuote()
        
    },[])
    async function fetchRandomQuote(){
        try {
            
            const quoteObject = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
            const clearList = [];
            setQuote(quoteObject.data.data[0]);
            setAuthor(quoteObject.data.data[0].quoteAuthor.replace(/ /g, '.'));
            SetQuoteList(clearList);

        } catch (error) {
            
        }
    }
    async function fetchAuthotQuote(){
        try {
            
            const quoteAObject = await axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`)
            SetQuoteList(quoteAObject.data.data)
            console.log(quoteList);
        } catch (error) {
            
        }
    }
    return quoteList.length >0 ? (
        <div className="container container-author">
            <button onClick={fetchRandomQuote} className="btn-random">
                <p>random</p>
                <div>
                    <span class="material-icons md-36">
                    autorenew
                    </span>
                </div>

            </button>
            <h1>{author}</h1>
            {quoteList.map(data =>(
                <div className="card" key={data._id}>
                    <p>{data.quoteText}</p>
                </div>        
                    ))}
        </div>
    ) : (
        <div className="container">
            <button onClick={fetchRandomQuote} className="btn-random">
                <p>random</p>
                <span class="material-icons">
                autorenew
                </span>
            </button>
            <div className="card">
                <p>{`"${quote.quoteText}"`}</p>
            </div>
            <button onClick={fetchAuthotQuote} className="btn-author">
                <div>
                    <h5>{quote.quoteAuthor}</h5>
                    <p>{quote.quoteGenre}</p>
                </div>
                <div>
                    <span className="material-icons md-48">
                    arrow_right_alt
                    </span>
                </div>
            </button>
        </div>
    )
}

export default RandomQuote
