import React from 'react';
import './Module.css'

function Module({closeModal}) {
  return (
      <div className="modalBackground">
          <div className="modalContainer">
              <button className="close"onClick={() =>closeModal(false)}>X</button>
              <div className="title">
                  <h2>Are you sure you want continue ?</h2>
              </div>
              <div className="body">
                  <p>The next page is awesome ! You should move forword,you will enjoy it </p>
              </div>
              <div className="footer">
                  <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                  <button>Continue</button>
              </div>
          </div>
         
      </div>
  )
}

export default Module;
