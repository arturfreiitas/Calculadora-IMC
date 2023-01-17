
import './App.css';
import React,{useState} from 'react';

function App() {
  const[nome, setNome] = useState('');

  const[altura, setAltura] = useState('');

  const[peso, setPeso] = useState('');

  const[resultado, setResultado] = useState('');

  

 function calcula(){
  if(resultado<1){
    return ''
  }
  else if(resultado<18.5){
    return `você está abaixo do peso`;
  } else if(resultado>18.5 && resultado<25){
    return `você está com peso normal`;
  } else if(resultado>25 && resultado<30){
    return `você está acima do peso`;
  }else if(resultado>30){
    return `você está com obesidade`;
  }
 } 




  return (
    <div className="App">
      <header className="App-header">
        <div className='Container'>
          <div className='cabecalho'>
            <h2>Calculadora - IMC</h2>
          </div>
          <div className='inputs'>
            <label>Nome: </label>
            <input type="text" name='nome' onChange={(event) => setNome(event.target.value)}></input><br/>
            </div>

            <div className='inputs'>
            <label>Altura (M):</label>
            <input type="number" name='altura' onChange={(event) => setAltura(Number(event.target.value))}></input><br/>
            </div>

            <div className='inputs'>
            <label>Peso (Kg):</label>
            <input type="number" name='peso' onChange={(event) => setPeso(Number(event.target.value))}></input><br/>
          </div>
          <div className='botao'>
            <button onClick={() => setResultado(peso/(altura*altura))} id="btn1">Calcular</button>
          </div>
          <div className='result'>
            <p>{resultado && `Olá: ${nome} seu IMC é: ${resultado.toFixed(2)}`}</p>
            <span>{calcula()||''} </span>
            </div>

        </div>
      </header>
    </div>
  );
}

export default App;
