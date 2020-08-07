import React from 'react';

import Navbar from './components/navbar'
import Rotas from './rotas'

function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Rotas></Rotas>
      </div>
    </>
  );
}

export default App;
