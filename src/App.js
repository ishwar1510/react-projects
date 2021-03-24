import React from 'react'
import './App.css';
import ContactApp from './myish/ContactApp';
import ContactCard from './myish/ContactCard';
import ContactList from './myish/ContactList';
import Http from './myish/Http';

function App() {
  return (
    <div className="App">
      {/* <Http />, */}
      <ContactApp />,
      <ContactCard />,
      <ContactList />
    </div>
  );
}

export default App;
