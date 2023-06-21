import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() { 
  const [mode, setMode] = useState("light"); //Wheather dark Mode is enable or not
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#212529";
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode'
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" exact element={<About />} />
            <Route
              path="/"
              exact element={ */}
                <Textform
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
      {/* //         }
      //       />
      //     </Routes>
    // </Router> */}
    </div>
    </>
  );
}

export default App;
