import React from 'react';
import './assets/css/App.css';
import Hello from './components/Hello.js';
import Menu from './components/Menu.js';
import Title from './components/Title.js';
function App() {
  return (
    <div>
      <Title></Title>
      <Hello age='25' />
      <Menu/>
    </div>
  );
}

export default App;
