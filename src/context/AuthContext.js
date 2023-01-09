import { createContext } from "react"

const AuthContext = createContext({ status: null, login: () => { }, logout: () => { } });
export default AuthContext