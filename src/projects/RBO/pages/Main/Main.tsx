import { urls } from "../../constants/Urls"
import { PersonForm } from "../../components/PersonForm/PersonForm"
import { Provider } from "react-redux"
import { IBrowser } from "../../../../browser/IBrowser"
import { postOfferReview } from "../../api/api-action"
import { store } from "../../store"
import { useState } from "react"
import { ToDoType } from "../../types/ToDo"

type MainProps = {
  browser: IBrowser
}

export const Main = ({browser}: MainProps) => {
  const [todo, setTodo] = useState<ToDoType>()
  const i:number = 25

  return (
        <Provider store={store}>
          <main>
            <PersonForm/>
            <div className="button__inner">
              <button className="open" onClick={() => browser.openBrowser(urls)}>Открыть браузер</button>
              <button className="get" onClick={() => {
                      postOfferReview(i).then(value => {setTodo(value)})
              }}>Запрос</button>
              <p>{JSON.stringify(todo)}</p>
            </div>
          </main>
      </Provider>
    )
  }