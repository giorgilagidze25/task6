import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState(""); 
  const [Id, setId] = useState(""); 
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const resp = await axios.get(`https://api.adviceslip.com/advice`);
      setAdvice(resp.data.slip.advice); 
      setId(resp.data.slip.id); 
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className='box'>
      <h2 className='advais'>ADVICE #{Id}</h2>
      <h2 className='text'>
        {loading ? "Loading..." : advice}
      </h2>
   
      <div className='rowdiv'>
        <div className='row'></div>
        <svg className='svg2' width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="6" height="16" rx="3" fill="#CEE3E9"/>
          <rect x="14" width="6" height="16" rx="3" fill="#CEE3E9"/>
        </svg>
        <div className='row'></div>
      </div>

      <button onClick={getData} disabled={loading}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4 0H20C22.2081 0.002526 23.9975 1.79191 24 4V20C23.9975 22.2081 22.2081 23.9975 20 24H4C1.79191 23.9975 0.002526 22.2081 0 20V4C0.002526 1.79191 1.79191 0.002526 4 0ZM6 16.5C6 17.3284 6.67157 18 7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15C6.67157 15 6 15.6716 6 16.5ZM7.5 9C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5C9 8.32843 8.32843 9 7.5 9ZM10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12ZM16.5 18C15.6716 18 15 17.3284 15 16.5C15 15.6716 15.6716 15 16.5 15C17.3284 15 18 15.6716 18 16.5C18 17.3284 17.3284 18 16.5 18ZM15 7.5C15 8.32843 15.6716 9 16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5Z" fill="#202733"/>
        </svg>
      </button>
    </div>
  );
}

export default App;
