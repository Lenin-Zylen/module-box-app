import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container'>
    <div className="card-layout">
      <div className='left-card'>
        <div className='card-riobox'>
          Riobox 
          <div className='line'></div>
        </div>
      </div>
      <div className='center-card'>
        <div className='modal'>Module 1</div>
        <div className='modal'>Module 2</div>
        <div className='modal'>Module 3</div>
        <div className='modal'>Module 4</div>
      </div>
      <div className='right-card'>
        <div className='card-insite'>
          InsiteStudio
           <div className='line-insite'></div>
          </div>
      </div>
    </div>
  </div>
  );
  }

export default App;
