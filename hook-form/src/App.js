import './App.css';import React, { useState } from  'react';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  
const [state, setState] = useState({
  firstName: "", 
  lastname: "", 
  email: "",
  password: "",
  cpassword: ""
});

  return (
    <div className="App">
        <Form inputs={state} setInputs={setState}/>
        <br></br>
        <Results data={state}/>
    </div>
  );
}

export default App;
