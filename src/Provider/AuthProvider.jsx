import { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";


export const authContext=createContext(null)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(false)
    return signInWithPopup(auth, provider);

  }

  const authInfo = {
    
  }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;