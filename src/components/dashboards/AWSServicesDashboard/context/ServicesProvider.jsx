import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ServicesContext = createContext();

const ServicesProvider = (props) => {
  const [selectedService, setSelectedService] = useState("EC2");
  return (
    <div>
      <ServicesContext.Provider value={[selectedService, setSelectedService]}>
        {props.children}
      </ServicesContext.Provider>
    </div>
  );
};
export default ServicesProvider;
