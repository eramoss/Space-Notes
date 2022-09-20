import {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { createSession, getUsers} from "../service/api";


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
        console.log(JSON.parse(recoveredUser))
        setLoading(false)
    },[])


    const sign = async (email,password) => {

        const response = await createSession(email,password)
        console.log(response.data)
        const loggedUser = response.data
        console.log(response)
        localStorage.setItem('user', JSON.stringify(loggedUser))   
    }

    const Login = async (email,password) => {

        const response = await getUsers(email,password)
        console.log(response.data)

        response.data.forEach((user,i) => {
            if (password === user.password && email === user.email) {
                console.log('login', {email, password})
                setUser({ id: user.id , email})

                const loggedUser = response.data
                console.log(response)
                localStorage.setItem('user', JSON.stringify(loggedUser))   
                Navigate('/myNotes')
                
            }
          
        }); 
    }
  

  
    const logout = () => {
      console.log('logout')
      setUser(null)
      localStorage.removeItem('user')
      Navigate('/')
    }

    return(
        <AuthContext.Provider value={{
            authenticated: !!user, user,loading, sign, Login, logout
          }}>
            {children}
        </AuthContext.Provider>
    )
}