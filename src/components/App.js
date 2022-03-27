import react, {useState} from "react";
import AppRouter from "./Router";
import Router from "components/Router";
import { authService } from "../fBase";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy: {new Date().getFullYear()} Twitter</footer>    
    </>
  );
}

export default App;
