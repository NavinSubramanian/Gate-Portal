import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import HomePage from './HomePage';
import Contact from './components/Contact';
import Login from './Login';
import Signup from './Signup';
import Questionpage from './Questionpage'
import Instruction from './Instruction'
import Leaderboard from './Leaderboard';


function App () {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/signup' Component={Signup}></Route>
        <Route path='/instruction' Component={Instruction}></Route>
        <Route path='/question' Component={Questionpage}></Route>
        <Route path='/leaderboard' Component={Leaderboard}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
