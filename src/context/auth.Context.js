import { useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { get } from "../services/authServices";
import { useEffect } from "react";


const API_URL = "http://localhost:4000";
 
const AuthContext = createContext();
 
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate()
  

  const storeToken = (token) => {    
    localStorage.setItem('authToken', token);
  }

  const authenticateUser = () => {         

    const storedToken = localStorage.getItem('authToken');
    
    if (storedToken) {

      get('/auth/verify')
      .then((response) => {

        const user = response.data;

        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);        
      })
      .catch((error) => {
                
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);      
        removeToken();  
      });      
    } else {

      setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);      
    }   
  }


  const removeToken = () => {                    

    localStorage.removeItem("authToken");
  }
 
 
  const logOutUser = () => {                   

    removeToken();
    authenticateUser();
    console.log('user', user)
    navigate('/')
  }  


  useEffect(() => {

    authenticateUser()

  }, [])

 
  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  )
}
 
export { AuthProvider, AuthContext };