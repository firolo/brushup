import './App.css';
import { useState } from "react";
import { LookUpForm } from './components/LookUpForm';

function App() {
  const [phVerb, setphVerb] = useState("phrasal verb");
  const [def, setdef] = useState("definition");

  // css
  const [statePh, setStatePh] = useState({display:"none",color:"red"});
  const [stateDef, setStateDef] = useState({display:"none"});

  // dictionary
  const phrasalVerbs = [{pverb:"Stand up", def:"Be on your feet"},{pverb:"Look after", def:"Care for someone"},
  {pverb:"make up", def:"Create a new idea"},{pverb:"Pick on", def:"bother sb"}]

  // functions
  // new phrasal verb button
  const chooseNewPHVerb = () => {
    const element = phrasalVerbs[Math.floor(Math.random() * phrasalVerbs.length)];
    
    setphVerb(element.pverb);
    setdef(element.def);
    
    setStatePh({
      display:"inline",
      color:"red"
    });
    setStateDef({display:"none"});    
  } 

  // show answer button
  const showAnswer = () => {
    setStateDef({display:"inline"});
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Brush up</h1>
        <LookUpForm></LookUpForm>
        <button onClick={chooseNewPHVerb}>New phrasal verb</button>
        <p style={statePh}>{phVerb}:</p>
        <button onClick={showAnswer}>show answer</button>
        <p style={stateDef}>{def}</p>
      </header>  
    </div>
  );
}

export default App;
