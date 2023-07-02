
import './App.css';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';
import React, { useState } from 'react'
import { Alter } from './components/Alter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
function App() {

  const bgColors = [
    {
      name: 'Blue',
      class: 'primary',
      text: 'light'
    },
    {
      name: 'Green',
      class: 'success',
      text: 'light'
    },
    {
      name: 'Red',
      class: 'danger',
      text: 'light'
    },
    {
      name: 'Orange',
      class: 'warning',
      text: 'light'
    },
    {
      name: 'Light Blue',
      class: 'info',
      text: 'dark'
    },
    {
      name: 'Black',
      class: 'dark',
      text: 'light'
    }];

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(function () {
      setAlert(null)
    }, 1500)
  }

  const toogleMode = (e) => {

    console.log(e.target.getAttribute('data-color'));
    if (mode === 'light') {
      setMode(e.target.getAttribute('data-color'))
      document.body.classList.add('bg-' + e.target.getAttribute('data-color'));
      document.body.classList.add('bg-opacity-50')
      showAlert('Dark Mode enabled', 'success');
    } else {
      document.body.classList.remove('bg-' + mode);
      setMode('light')

      //document.body.style.backgroundColor = "white";
      showAlert('Light Mode enabled', 'success');
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toogleMode={toogleMode} bgColors={bgColors} />

        {/* <Alter alert={alert} /> */}
        <div className="container mt-4">

          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={
              <TextForm
                mode={mode}
                title="Simply enter your text and choose the case you want to convert it to."
                label="Type your text"
                showAlert={showAlert}
              />
            }></Route>
          </Routes>



        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
