import { createContext } from "react";
import { useState } from "react";


export const AuthContext = createContext

const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(true)

  return (
    <AuthContext.provider value={{currentUser}}>{children}</AuthContext.provider>
  )
}

export default AuthContextProvider