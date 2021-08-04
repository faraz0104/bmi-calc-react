
import './App.css';
import React, { useState } from "react";

function App() {
  const [height ,setHeight] = useState("");
  const [weight,setWeight]=useState("");

  const [bmi,setBmi]=useState(null);

  const [status,setStatus]= useState("");

function calculate(){
  let bmi = Number(weight/(height/100) ** 2).toFixed(2);
  setBmi(bmi);


  let bmiStatus = getStatus(bmi)

  setStatus(bmiStatus);

  setWeight("");
  setHeight("");


}

  function getStatus(bmi){
    if(bmi<18.5) return "Underweight";
    else if(bmi>=18.5 && bmi<24.9) return "Normal";
    else if(bmi>=25 && bmi<29.9) return "Overweight";

    else return "obese"



  }
  return (
    <div className="App">
      <form >

        <h1 className="App-heading">BMI Calculator</h1>        

        <div>
          <label>Enter your Height </label>
          <input type ="text" value={height} onChange={(e) =>setHeight(e.target.value)} />

        </div>

        <div className="input-weight">
          <label>Enter your Weight </label>
          <input type= "text" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>

        <button onClick={calculate} type = "submit" className="App-button">Calculatr BMI</button>
        </form>

        <div className="Result-area">
            <p>Your BMI is: {bmi} </p>
            <p>You are currently: {status}</p>
          </div>
      
    </div>
  );
}

export default App;
