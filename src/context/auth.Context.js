import { useState, createContext } from "react";
import axios from "axios";
const API_URL = "http://localhost:4000";
 
const AuthContext = createContext();
 
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  

  const storeToken = (token) => {    
    localStorage.setItem('authToken', token);
  }

  const authenticateUser = () => {         

    const storedToken = localStorage.getItem('authToken');
    
    if (storedToken) {

      axios.get(
        `${API_URL}/auth/verify`, 
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
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
  }  

 
  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  )
}
 
export { AuthProvider, AuthContext };