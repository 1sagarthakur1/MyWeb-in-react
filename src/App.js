import React from 'react'
import {Route, Routes} from 'react-router-dom';
import First from './Pages/Home/First';
import IndiProjects from './Pages/Indivisual_P/IndiProjects';

export default function App() {
  return (
    <Routes>
        <Route exact path='/' element={<First/>}/>
        <Route path='/indivisualP' element={<IndiProjects/>}/>
    </Routes>
  )
}
