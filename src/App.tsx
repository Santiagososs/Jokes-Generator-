import React, {useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Resps from './components/Resps';
import api from './configs/api';




function App() {

  async function BringJoke(){
    await api.get("").then((data)=>{
       var joker = data.data
       var joker2 = data.data
       setData(joker.setup)
       setData2(joker.punchline)
     }).catch((error)=>{
        console.log(error)
     })
   
   }
   const [data2, setData2] = useState()
   
  const [data, setData] = useState()
   

  return (
    <div className="App">
        
        <div className="div-main">

       <div className="content-container">
       <span className="title-cont">Joke Generator</span>
       <Button  onClick={BringJoke} variant="contained" color="secondary">Click-me to gen a Joke!</Button>
         
       </div>
             
        <div className="joke-resp">
           <Resps jokess={data}/>
           <Resps jokess={data2}/>
        </div>

    

        </div>

    </div>

  );
}

export default App;
