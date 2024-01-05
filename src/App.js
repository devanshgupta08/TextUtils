// Affecting origin devansh 
import React, { useState,useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import TextForm from "./Components/TextForm.jsx";
import Alert from "./Components/Alert.jsx";
import About from "./Components/About.jsx";
import ContactUs from "./Components/ContactUs.jsx";

function App() {
  const [mode, setMode] = useState("light");
  const ToggleMode = () => {
    if (mode === "light") 
      setMode("dark");
    else 
      setMode("light");
  };
  useEffect(() => {
    // Dynamically set body background color based on the mode
    document.body.style.backgroundColor = mode === "light" ? "#f2f2f2" : "#0b0b0c";
    // document.body.style.transition = "background-color 0.3s ease-in-out";
  }, [mode]);
  const [alertObj,setAlert] = useState(false);
  const showAlert = (msg,type)=>
  {
    setAlert(
      {
        msg:msg,
        type:type
      }
      );
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode} />
      <Routes>
        <Route exact path="/" element={
          <>
          {alertObj && <Alert alertObj={alertObj} />}
          <div className="textContainer flex flex-col justify-center items-center h-[70vh] w-full">
            <TextForm mode={mode} showAlert={showAlert} />
          </div>
          </>
        }/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<ContactUs/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
