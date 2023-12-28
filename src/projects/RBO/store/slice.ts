import {createSlice} from '@reduxjs/toolkit'
import { personRboInputs } from '../constants/PersonRboInputs'
import { PersonRboInputType } from '../types/PersonRboInputType'
import { getTogo } from './api-action'

const personSlice = createSlice({
  name: "personInputs",
  initialState: {
    person: (localStorage.getItem('person') && JSON.parse(localStorage.getItem('person')??"") as PersonRboInputType[]) || personRboInputs(),
    getTodo: ''
  },
  reducers: {
    changePersonRboInputs(state, action) {
      //TODO: хранится и в сторадже и в редусерах, возможно стоит выбрать что-то одно
      state.person = state.person.map((e, i) => i===action.payload.index?action.payload.element:e)
      localStorage.setItem('person', JSON.stringify(state.person))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTogo.fulfilled, (state, action) => {
      state.getTodo = action.payload
    })
  }
})

export const {changePersonRboInputs} = personSlice.actions
export default personSlice.reducer;
