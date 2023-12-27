import { PersonRboInputType } from "../types/PersonRboInputType";

export function personRboInputs(): PersonRboInputType[] {  
  return [
    {name: "lastName", type: "text", placeholder: "Фамилия", value: "", isActive:false},
    {name: "firstName", type: "text", placeholder: "Имя", value: "", isActive:true},
    {name: "middleName", type: "text", placeholder: "Отчество", value: "", isActive:true},
    {name: "birthDate", type: "date", placeholder: "Дата рождения", value: "", isActive:true},
  ]
}