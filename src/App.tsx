// src/App.tsx
import React from 'react';
import './App.css';
import NotificationComponent from './components/NotificationComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase Notification App</h1>
      </header>
      <main>
        <NotificationComponent />
      </main>
    </div>
  );
};

export default App;
