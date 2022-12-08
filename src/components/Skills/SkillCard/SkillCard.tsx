import React from 'react'

import './styles.css'

type Skill = {
    id: number,
    name: string,
    asset: string,
    level: number
}

const SkillCard = ({
    id,
    name,
    asset,
    level
}: Skill) => {
  return (
    <div className="skill-card__container">
        <h3>{name}</h3> Level {level}
    </div>
  )
}

export default SkillCard