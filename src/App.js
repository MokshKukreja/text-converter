import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
// import About from "./About";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {


  const [mode,setMode] = useState("light")
  const [color,setColor] =useState("#303030")
  const[alert,setAlert] = useState(null)

   function showAlert(message,type){
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode =()=>{
      if(mode==="light"){
        setMode("dark")
        setColor("white")
        document.body.style.backgroundColor="#303030"
        showAlert("Dark mode has been enabled","success")
      }else{
        setMode("light")
        setColor("#303030")
        document.body.style.backgroundColor="white"
        showAlert("Light mode has been enabled","success")
      }
  }
  return (
   <>
   {/* <Router> */}
    <Navbar title="TextConverter"  mode={mode} toggleMode={toggleMode} />
    <Alerts alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
      {/* <Route exact path="/about" element={ }> */}
      {/* <About/> */}
      {/* </Route> */}
      {/* <Route exact path="/" element={  }> */}
      {/* </Route> */}
    {/* </Routes> */}
    <TextForm alert={showAlert} color={color}/>
    </div>
   {/* </Router> */}
   </>
  );
}

export default App;