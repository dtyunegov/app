// import { useState } from "react"
// import { personRboInputs } from "../../constants/PersonRboInputs"
import { PersonRboInputType } from "../../types/PersonRboInputType"
import {useSelector, useDispatch} from "react-redux"
import { changePersonRboInputs } from "../../store/slice"

//TODO: PersonRboInputType - не нравится нейминг и структура, стоит подумать
//TODO: возможно редусер лишний и достаточно useState. 
export const PersonForm = () => {
  const personValues: PersonRboInputType[] = useSelector((state: {person: {person: PersonRboInputType[]}}) => state.person.person )
  
  // const [peoples, setPeople] = useState<PersonRboInputType[]>(personRboInputs)

  // const changePerson = (element: PersonRboInputType, index: number) => {
  //   setPeople(peoples.map((e, i) => i===index?element:e))
  // }

  const dispatch = useDispatch()
  const changePersonDispatch = (element:PersonRboInputType, index: number) => dispatch(changePersonRboInputs({element, index}))
 
  return (
    <div className="person__inner">
        {personValues.map((element, index) => 
          <div key={element.name}>
            <input placeholder={element.placeholder} value={element.value} type={element.type} onChange={(event) => {
              changePersonDispatch({
                ...element,
                value: event.target.value
              }, index)
              }}/>
            <input type="checkbox" checked={element.isActive} onChange={() => {
              }}/>
          </div>
          )}
    </div>
  )
}