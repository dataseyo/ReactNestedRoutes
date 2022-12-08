import React, { useState } from 'react'
import { Link } from 'react-router-dom' 

import './styles.css'
import SkillCard from '../SkillCard/SkillCard'

type Props = {}

const SkillList = (props: Props) => {
    const [skills, setSkills] = useState([
        {
            id: 1,
            name: "skill 1",
            level: 2,
            asset: ""
        },

        {
            id: 2,
            name: "skill 2",
            level: 10,
            asset: ""
        },

        {
            id: 3,
            name: "skill 3",
            level: 6,
            asset: ""
        },

        {
            id: 4,
            name: "skill 4",
            level: 1,
            asset: ""
        },
        
        {
            id: 5,
            name: "skill 5",
            level: 1,
            asset: ""
        },

        {
            id: 6,
            name: "skill 6",
            level: 1,
            asset: ""
        },

        {
            id: 7,
            name: "skill 7",
            level: 1,
            asset: ""
        },

        {
            id: 8,
            name: "skill 8",
            level: 1,
            asset: ""
        }
    ])
  return (
    <div>
        {
            skills.map(skill => {
                return (
                    <Link to={`${skill.id}`} state={skill}>
                        <SkillCard
                            {...skill}
                        />
                    </Link>
                )
            })
        }
    </div>
  )
}

export default SkillList