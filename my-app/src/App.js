
import './App.css';


import React from 'react';
import Allroutes from './Allroutes/routes';
import AuthContextComponent from './Allroutes/context';

function App() {

  return (
    <div className="App">
      <AuthContextComponent>
      <Allroutes/>
      </AuthContextComponent>
      
    </div>
  );
}

export default App;
