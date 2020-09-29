import React, {useEffect, useState} from 'react';
import Card from './components/Card/Card';
import axios from 'axios';
import './App.scss';

function App() {

  const [img, setImg] = useState([]);

  const cargarGatito = async () =>{
    const res = await axios.get('https://api.thecatapi.com/v1/images/search');
    try{
      setImg(res.data);  
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    cargarGatito();
  },[]);

  return (
    <div className="app">
      <section>
        <h1>OCTO</h1>
        <h1>GATOS</h1>
        <p>La familia:</p>
        <p>Para ver a los integrantes haz click</p>
        <button className="btn" onClick={()=> cargarGatito()}>AQUI!</button>
      </section>
      {
        img.map(item=>{
          return(
            <Card url={item.url} id={item.id}/>
          )
        })
      }

    </div>

  );
}

export default App;
