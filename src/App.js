import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [disp,setdisp] = useState('');
  const [fval,setfval] = useState('');
  const [sign,setsign] = useState('');

  const calc = (s) => {
      setsign(s);
      setfval(disp);
      setdisp('')
  }

  const ans = () => {
      if(sign=='+')
      {
          setdisp(parseFloat(fval)+parseFloat(disp));
      }
  }

  return (
    <div className="App">
      <input type="text" name="" id="" value={disp} /><br/>
      <input type="button" value="1" onClick={()=>{setdisp(disp+1)}} />
      <input type="button" value="2" onClick={()=>{setdisp(disp+2)}} />
      <input type="button" value="3" onClick={()=>{setdisp(disp+3)}} /><br/>
      <input type="button" value="4" onClick={()=>{setdisp(disp+4)}} />
      <input type="button" value="5" onClick={()=>{setdisp(disp+5)}} />
      <input type="button" value="6" onClick={()=>{setdisp(disp+6)}} /> <br />
      <input type="button" value="7" onClick={()=>{setdisp(disp+7)}} />
      <input type="button" value="8" onClick={()=>{setdisp(disp+8)}} />
      <input type="button" value="9" onClick={()=>{setdisp(disp+9)}} /> <br />
      <input type="button" value="+" onClick={()=>{calc('+')}} />
      <input type="button" value="-" onClick={()=>{calc('-')}} />
      <input type="button" value="=" onClick={()=>{ans()}} />

    </div>
  );
}

export default App;
