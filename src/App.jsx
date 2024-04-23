import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <HooksCakeContainer />
      <CakeContainer />
      <IceCreamContainer />
    </Provider>
  )
}

export default App
