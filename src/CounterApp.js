import React,{useState} from 'react'
import propsTypes from 'prop-types'
//saludo y subtitulo es una props agregada con destructuracion de objetos
const  CounterApp= ({value = 0}) =>{


    const [counter, setCounter] = useState(value);

    const BotonSum = ()=>{
      setCounter(counter+1);
    }
    const BotonRes = ()=>{
        setCounter(counter-1);
      }
 
      const BotonReset = ()=>{
        setCounter(value);
      }
   
 
   return(
    <>
     <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={BotonSum}>+1</button>
        <button onClick={BotonRes}>-1</button>
        <button onClick={BotonReset}>Reset</button>
    </>
   );
   
   
}
// aqui agregamos typo de datos a las props
CounterApp.prototype = {
value: propsTypes.number.isRequired
}
//aqui definimos valores por defecto a las props
CounterApp.defaultProps={
   
}

export default CounterApp;