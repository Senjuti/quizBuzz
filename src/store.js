import { configureStore } from '@reduxjs/toolkit'

import questionsReducer from './features/questions/questionsSlice'
import resultsReducer from './features/results/resultsSlice'

export const store = configureStore({
  reducer: {
    questionsSlice: questionsReducer,
    resultsSlice: resultsReducer
  }
})