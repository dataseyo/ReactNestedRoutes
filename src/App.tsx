import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { 
  Skill
} from './components'

import './App.css'
import { 
  HomePage,
  SkillsPage
} from './pages'
import { 
  Nav 
} from './components'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/skills/*" element={<SkillsPage/>}/>
      </Routes>
    </div>
  )
}

export default App
