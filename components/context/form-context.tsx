import { createContext, useState, ReactNode } from "react";

// Define the context type
interface FormContextProps {
  showForm: boolean;
  toggleForm: () => void;
}

// Create the context with default values
export const FormContext = createContext<FormContextProps>({
  showForm: false, // Default is form hidden
  toggleForm: () => {},
});

// FormProvider component
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [showForm, setShowForm] = useState(false);

  // Toggle form visibility function
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <FormContext.Provider value={{ showForm, toggleForm }}>
      {children}
    </FormContext.Provider>
  );
};
