
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
   <UserContextProvider>
    <h1>React with Chai and share is important</h1>
    <Login/>
   </UserContextProvider>
  )
}

export default App
