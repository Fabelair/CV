import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";//npm i -D react-router-dom@latest
import './index.css';
import Footer from './composants/footer';
import Navbar from './composants/navbar';
import Etude from './pages/etude';
import Prix from './pages/prix';
import Emplois from './pages/emplois';
import Engagements from './pages/engagements';
function App() {

  return (
    <ul class="select-none">
      <div class="min-h-[100vh] flex flex-col">
        <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Etude/>}></Route>
            <Route path="/Prix" element={<Prix/>}></Route>
            <Route path="/Emplois" element={<Emplois/>}></Route>
            <Route path="/Engagements" element={<Engagements/>}></Route>
        </Routes>
        </Router>
      </div>
      <Footer/>
    </ul>

  )
}

export default App
