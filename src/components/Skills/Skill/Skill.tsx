import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const Skill = () => {
    const data = useLocation()
    const skill = data.state

    return (
        <div>
            {JSON.stringify(skill)}
            <Link to="/skills">Back</Link>
        </div>
    )
}

export default Skill
