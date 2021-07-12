import "./App.css";
import Home from "./pages/Home";
import { useEffect} from "react";


function App() {
  useEffect(() => {
    if (localStorage.getItem("LoggedIn") === null){
      console.log("initial logged in false");
      localStorage.setItem("LoggedIn", false);
    }
  }, [])
  
  return (
      <div className="App">
        <Home/>
      </div>
  );
}
export default App;
