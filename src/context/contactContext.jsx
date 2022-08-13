import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ContactContext = createContext();
const useContactContext = () => useContext(ContactContext);

const ContactProvider = ({ children }) => {
  const [contact, setContact] = useState([]);

  const getData = () => {
    const url = "https://reqres.in/api/users";
    axios
      .get(url)
      .then((response) => {
        setContact(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const value = { contact };
  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
};

export { ContactProvider, useContactContext };
