import react, {useEffect, useState} from "react";
import AppRouter from "./Router";
import Router from "components/Router";
import { authService } from "../fBase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
   if(user) {
     setIsLoggedIn(true);
     const uid = user.uid;
     
   }else {
    setIsLoggedIn(false);
   }
   setInit(true);
 });

  }, []);
  return (
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
    <footer>&copy: {new Date().getFullYear()} Twitter</footer>    
    </>
  );
}

export default App;
