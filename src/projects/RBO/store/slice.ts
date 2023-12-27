import {createSlice} from '@reduxjs/toolkit'
import { personRboInputs } from '../constants/PersonRboInputs'
import { PersonRboInputType } from '../types/PersonRboInputType'

const personSlice = createSlice({
  name: "personInputs",
  initialState: {
    person: (localStorage.getItem('person') && JSON.parse(localStorage.getItem('person')??"") as PersonRboInputType[]) || personRboInputs()
  },
  reducers: {
    changePersonRboInputs(state, action) {
      //TODO: хранится и в сторадже и в редусерах, возможно стоит выбрать что-то одно
      state.person = state.person.map((e, i) => i===action.payload.index?action.payload.element:e)
      localStorage.setItem('person', JSON.stringify(state.person))
    }
  }
})

export const {changePersonRboInputs} = personSlice.actions
export default personSlice.reducer;
