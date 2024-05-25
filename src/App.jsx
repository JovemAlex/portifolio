import React from 'react';
import Home from './pages/Home';
import Stacks from './pages/Stacks';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import './App.css';

function App() {
  return (
    <div className='w-[1216px] max-w-[1216px]'>
      <Home />
      <Stacks />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App