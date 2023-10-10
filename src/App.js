import React, { useState } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

export default function App() {
  const [swinging, setSwinging] = useState(false);

  return (
    <div className="App">
      <div className={`knight ${swinging ? 'swinging' : ''}`}>
        <i className="fas fa-chess-knight">🤴🏽</i>
        <i className="fas fa-sword">🔪</i>
      </div>
      <button onClick={() => setSwinging(!swinging)}>
        {swinging ? 'Stop Swinging' : 'Start Swinging'}
      </button>
    </div>
  );
}
