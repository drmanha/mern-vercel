import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  // const dotenv = require('dotenv');
  // dotenv.config();
  const [result,setResult] = useState('');
  async function fetchInfo(){
    const url=`${process.env.REACT_APP_API_URL}/test`
    // const url=`http://localhost:4000/api/test`

    const response = await fetch(url);
    const json = await response.json();
    setResult(json)
    console.log("process.env.REACT_APP_API_URL",process.env.REACT_APP_API_URL)
    console.log("url",url)
  }
  return (
    <div className="App">
    <button onClick={fetchInfo}>fetch infor from API</button>
    <div>result: {result}</div>
    </div>
  );
}

export default App;
