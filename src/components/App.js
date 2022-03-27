import react, {useState} from "react";
import AppRouter from "./Router";
import Router from "./Router";
import firebase from "../firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy: {new Date().getFullYear()} Twitter</footer>
    
    </>
  );
}

export default App;
