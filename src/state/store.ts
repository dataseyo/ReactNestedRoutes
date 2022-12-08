import { configureStore } from '@reduxjs/toolkit'

import skillsReducer from './skillsSlice'

const store = configureStore({
    reducer: {
        skills: skillsReducer
    }
})

export default store

// typing
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch