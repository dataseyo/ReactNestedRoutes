import React, { useState } from 'react'
import { Outlet, Routes, Route} from 'react-router-dom' 

import './styles.css'
import SkillList from './SkillList/SkillList'
import Skill from './Skill/Skill'

type Props = {}

const Skills = (props: Props) => {
    
  return (
    <div>
        <h1>Skills</h1>

        <Routes>
            <Route index element={<SkillList/>}/>
            <Route path=":id" element={<Skill/>}/>
        </Routes>
        <Outlet/>
    </div>
  )
}

export default Skills        