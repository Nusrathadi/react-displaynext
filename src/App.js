import React from "react";

function App() {
  const [pass,setPass]=React.useState("")
  const [cPass,setCPass]=React.useState("")

  function handlePassword(e){
    
    setPass(e.target.value)
    console.log(e.target.value)
  }
  function handleConfirmPass(e){
    setCPass(e.target.value)
    console.log(cPass)
  }
  function handleB(e){
    setCPass(e.target.value)
    if(cPass === pass){
      console.log(cPass)
    }
    else{
      console.log("pasword not match")
    }
  }
  return (
    <div className="App" style={{padding:"40px",margin:"30px",display:"block"}}>
      
      <input   type="password" onChange={handlePassword} value={pass}/>
      <input type="password" onChange={handleConfirmPass} onBlur={handleB} value={cPass}/>
      <button>Submit</button>
    </div>
  );
}

export default App;
