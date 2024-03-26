// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";  //importing Navbar
import Form from "./components/TextForm";
import { useState } from "react";
import React from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [mode, setmode] = useState("light")

  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }


  //irritating quick  messages in title {YOU CAN USE IT TO SHOW NOTIFICATIONS }

  // setInterval(() => {
  //   document.title = "Win $1 million now !!!";
  // }, 2000);
  // setInterval(() => {
  //   document.title = "Your pc have VIRUS !!!";
  // }, 1500);

 

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showalert("This is dark mode ", "success");
      document.title = "textUtils - dark mode";       //It will change the text next to fevicon image
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("This is light mode ", "success");
      document.title = "textUtils - light mode";
    }
  }

  setTimeout(() => {
    setalert(null);
  }, 2000);

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" second_title="Home" third_title="About us" mode={mode} toggle={toggle}  /> {/*    we created a navbar in another js file in components and the we import it to make tidy code */}

        <Alert alert={alert} />

        <div className="container" >           {/* container is is bootstrap class which make a container for the items present in it */}
        <Form my-3 mode={mode} showalert={showalert} />
          {/* <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<Form my-3 mode={mode} showalert={showalert} />} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
