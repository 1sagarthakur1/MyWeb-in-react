import React from 'react'
import {Route,  Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import IndiProjects from './Pages/Indivisual_P/IndiProjects';

export default function App() {
  return (
      <>
        <Routes>
            <Route path='*' element={<Home/>}/>
            <Route exact path='/indivisualP' element={<IndiProjects/>}/>
        </Routes>
      </>
  )
}
