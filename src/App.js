import { useState } from 'react';
import './App.css';
import Module from './Components/Module'

function App() {
  const [openModal,setOpenModal ] = useState(false)
  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal</h1>
      <button className="openModalBtn" onClick={() =>{setOpenModal(true)}}>Open</button>
     { openModal &&<Module closeModal ={setOpenModal}/>}
    </div>
  );
}

export default App;
