import {configureStore} from '@reduxjs/toolkit'
import personReducer from "./slice"

export default configureStore({
  reducer: {
    person: personReducer
  }
})

