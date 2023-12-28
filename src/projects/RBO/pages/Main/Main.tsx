import { urls } from "../../constants/Urls"
import { PersonForm } from "../../components/PersonForm/PersonForm"
import { Provider, useDispatch } from "react-redux"
import store from "../../store/index"
import { IBrowser } from "../../../../browser/IBrowser"
import { getTogo } from "../../store/api-action"

type MainProps = {
  browser: IBrowser
}

export const Main = ({browser}: MainProps) => {
  const dispatch = useDispatch()

      return (
        <Provider store={store}>
          <main>
            <PersonForm/>
            <div className="button__inner">
              <button className="open" onClick={() => browser.openBrowser(urls)}>Открыть браузер</button>
              <button className="get" onClick={() => {
                      dispatch(getTogo())
              }}>Запрос</button>

            </div>
          </main>
      </Provider>
    )
  }