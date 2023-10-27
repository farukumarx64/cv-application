import { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export const FormDataProvider = ({ children, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    fullName: "",
    email: "",
    phoneNumber: ""
  });

  const updateFormData = (data) => {
    setFormData(data);
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  return useContext(FormDataContext);
};
