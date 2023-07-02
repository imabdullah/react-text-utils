
import './App.css';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';
import React, { useState } from 'react'
import { Alter } from './components/Alter';
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
      <Navbar mode={mode} toogleMode={toogleMode} bgColors={bgColors} />

      <div className="container mt-4">
        {/* <Alter alert={alert} /> */}
        <TextForm
          mode={mode}
          title="Simply enter your text and choose the case you want to convert it to."
          label="Type your text"
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
