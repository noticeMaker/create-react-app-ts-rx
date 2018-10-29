
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import store from 'src/configureStore'
import './styles'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker()
