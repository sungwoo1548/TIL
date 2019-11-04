import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="wrapOne">
        <h3>display:flex flex-direction:row flex-wrap:wrap</h3>
        <div className="item01"><p>1 : flex:100%</p></div>
        <div className="item02"><p>2 : flex:1 align-items:center</p></div>
        <div className="item03"><p>3 : flex:3 justify-content:center</p></div>
      </div>
    </>
  );
}

export default App;
