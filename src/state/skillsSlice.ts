import { createSlice } from "@reduxjs/toolkit";

type Task = {
    id: number,
    name: string,
    xp: number
}

type Skill = {
    id: number,
    name: string,
    level: number,
    tasks: Task[]
}


const initialState: Skill[] = [
    {
        id: 1,
        name: "",
        level: 1,
        tasks: [
            {
                id: 1,
                name: "task 1",
                xp: 10
            }
        ]
    }
]

const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        addSkill: (state, action) => {

        }
    }
})

// export actions
export const {
    addSkill
} = skillsSlice.actions

// export reducer
export default skillsSlice.reducer