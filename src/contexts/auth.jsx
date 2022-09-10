import {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const Navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false)
    },[])


    const login = (email,password) => {

        const loggedUser = {
            id: '123',
            email,
        }

        localStorage.setItem('user', JSON.stringify(loggedUser))


        if (password === 'secret') {
            console.log('login', {email, password})
            setUser({ id: '123',email})
            Navigate('/myNotes')
        }
      
    }
  
    const logout = () => {
      console.log('logout')
      setUser(null)
      localStorage.removeItem('user')
      Navigate('/')
    }

    return(
        <AuthContext.Provider value={{
            authenticated: !!user, user,loading, login, logout
          }}>
            {children}
        </AuthContext.Provider>
    )
}