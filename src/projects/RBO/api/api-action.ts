import { ToDoType } from '../types/ToDo';
import { createApi } from '../api';

const api = createApi();

export const postOfferReview = async function (id: number) {
  const {data} = await api.get<ToDoType>(`/todos/${id}`)
  return data;
};