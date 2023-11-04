import "./styles/App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Preview from "./components/Preview";
import PersonalInfo from "./components/PersonalInfo";
import { FormDataProvider } from "./components/FormDataContext";
import { FormStorageProvider } from "./components/FormStorageContext";
import PreviewTwo from "./components/Preview-1";

function App() {
  const [activeComponent, setActiveComponent] = useState(<PersonalInfo />);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };
  return (
    <FormStorageProvider>
      <FormDataProvider>
        <>
          <NavBar onComponentChange={handleComponentChange} />
          {activeComponent}

          <PreviewTwo />
        </>
      </FormDataProvider>
    </FormStorageProvider>
  );
}

export default App;
