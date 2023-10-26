import "./styles/App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Preview from "./components/Preview";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  const [activeComponent, setActiveComponent] = useState(<PersonalInfo />);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };
  return (
    <>
      <NavBar onComponentChange={handleComponentChange}/>
      {activeComponent}

      <Preview />
    </>
  );
}

export default App;
