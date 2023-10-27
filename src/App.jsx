import "./styles/App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Preview from "./components/Preview";
import PersonalInfo from "./components/PersonalInfo";
import { FormDataProvider } from "./components/formDataContext";

function App() {
  const [activeComponent, setActiveComponent] = useState(<PersonalInfo />);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };
  return (
    <FormDataProvider>
      <>
        <NavBar onComponentChange={handleComponentChange} />
        {activeComponent}

        <Preview />
      </>
    </FormDataProvider>
  );
}

export default App;
