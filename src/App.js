
import Login from "./components/Login";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import AuthContext from "./context/AuthContext"

import NavigationBar from './components/NavigationBar'
import HomePage from './components/Homepage'

const App = () => {
  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
  const logout = () => {
    setauthstatus(false);
  };
  return (
    <AuthContext.Provider value={{ status: authstatus, login: login, logout: logout }}>
      {authstatus ? <>
        <NavigationBar />
        <HomePage />
      </> : <Login />}
    </AuthContext.Provider>

  )
}

export default App;
