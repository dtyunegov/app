import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { ToDoType } from '../types/ToDo';

export const getTogo = createAsyncThunk<
ToDoType,
undefined,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'personInputs/getTogo',
  async function() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return await response.data()

  }
)