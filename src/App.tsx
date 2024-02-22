import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { RouteConfig } from "./Routes";
import { useEffect, useState } from "react";
import MobileHeader from "./components/MobileHeader/MobileHeader";

import Header from "./components/Header/Header";
function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 580);
    };

    handleResize(); // Set initial state based on window width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [userName, setUserName]= useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {isMobile ? <MobileHeader /> : <Header userName={userName}/>}
          <RouteConfig setUserName={setUserName} />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
