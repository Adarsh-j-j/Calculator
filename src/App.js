import './App.css';
import { useState } from 'react';

function App() {

  const [output, setOutput] = useState("");

  const myFunction = (e) =>{
    let operandCheck = output.slice(-1);//stores last character
    if(operandCheck === "*" && e.target.name === "*"){
      let removed = output.slice(0, -1); //removes last one
      setOutput(removed.concat(e.target.name));
    }
    else if(operandCheck === "*" && e.target.name === "/"){
      let removed = output.slice(0, -1);
      setOutput(removed.concat(e.target.name));
    }
    else if(operandCheck === "/" && e.target.name === "*"){
      let removed = output.slice(0, -1);
      setOutput(removed.concat(e.target.name));
    }
    else if(operandCheck === "+" && e.target.name === "*"){
      let removed = output.slice(0, -1);
      setOutput(removed.concat(e.target.name));
    }
    else if(operandCheck === "-" && e.target.name === "*"){
      let removed = output.slice(0, -1);
      setOutput(removed.concat(e.target.name));
    }
    else if(operandCheck === "/" && e.target.name === "/"){
      let removed = output.slice(0, -1);
      setOutput(removed.concat(e.target.name));
    }
    else if(operandCheck === "-" && e.target.name === "/"){
      let removed = output.slice(0, -1);
      setOutput(removed.concat(e.target.name));
    }
    else if(operandCheck === "+" && e.target.name === "/"){
      let removed = output.slice(0, -1);
      setOutput(removed.concat(e.target.name));
    }
    else{
      setOutput(output.concat(e.target.name));
    }
  };



  // execute function
  const execute = () => {
    let operandCheck = output.slice(-1);
    const operandArray = ["*", "/", "-", "+"];
    const check = operandArray.filter((value, index) => {
      return value === operandCheck;
    })
    if(check.length == 0){
      if(output.slice(0,1) === "0"){
        let zeroRemoved = parseInt(output); //returns the first integer. https://stackoverflow.com/questions/34358331/why-are-octal-numeric-literals-not-allowed-in-strict-mode-and-what-is-the-worka
        setOutput(eval(zeroRemoved).toString());
      }
      else{
        setOutput(eval(output).toString());
      }
    }
    else{
      setOutput(output);
    }
  }

  // clear function
  const clear = () =>{
    setOutput("");
  }


  return (
    <div className = "App">
      <div className="main-container">
        <div className="content">
          <div className="display-cntr">
            <input type="text" value = {output} />
          </div>
          
          <div className="keypad">
            <button name = "+" onClick = {myFunction} >+</button>
            <button name = "-" onClick = {myFunction} >-</button>
            <button name = "*" onClick = {myFunction} >&times;</button>
            <button name = "/" onClick = {myFunction} >&divide;</button>
            
            {/* <div className="numbers"> */}
            <button className = "white" onClick = {myFunction} name = "7">7</button>
            <button className = "white" name = "8" onClick = {myFunction} >8</button>
            <button className = "white" name = "9" onClick = {myFunction} >9</button>
            <button className = "white" name = "4" onClick = {myFunction} >4</button>
            <button className = "white" name = "5" onClick = {myFunction} >5</button>
            <button className = "white" name = "6" onClick = {myFunction} >6</button>
            <button className = "white" name = "1" onClick = {myFunction} >1</button>
            <button className = "white" name = "2" onClick = {myFunction} >2</button>
            <button className = "white" name = "3" onClick = {myFunction} >3</button>
            <button className = "white" name = "0" onClick = {myFunction} >0</button>
            <button className = "white" name = "." onClick = {myFunction} >.</button>
            <button className = "white" onClick = {clear}>C</button>
            {/* </div> */}
            
            <button id = "result" onClick = {execute}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
