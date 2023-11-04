import { createContext, useContext, useState } from "react";

// Create a context
const FormStorageContext = createContext();

// Create a context provider component
export const FormStorageProvider = ({ children }) => {
  const [formStorageMap, setFormStorageMap] = useState(new Map());

  return (
    <FormStorageContext.Provider value={{ formStorageMap, setFormStorageMap }}>
      {children}
    </FormStorageContext.Provider>
  );
};

// Custom hook to access the form storage map and its setter
export const useFormStorage = () => {
  const context = useContext(FormStorageContext);
  if (!context) {
    throw new Error("useFormStorage must be used within a FormStorageProvider");
  }
  return context;
};
