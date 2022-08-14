import React from 'react';
import './App.css';
import './components/header/header';
import Header from "./components/header/header";
import Content from "./components/content/content";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
      <div className={'app-wrapper'}>
          <Header />
          <Content />
          <Sidebar />
      </div>
  );
}

export default App;
