import React from 'react';
import './App.css';
import './components/header/Header';
import Header from "./components/header/Header";
import Navbar from "./components/sidebar/Navbar";
import {MyProfile} from "./components/Profile/MyProfile";

function App() {
  return (
      <div className={'app-wrapper'}>
          <Header />
          <MyProfile/>
          <Navbar />
      </div>
  );
}

export default App;
