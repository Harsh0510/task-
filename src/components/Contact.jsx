import React from "react";
import { useContactContext } from "../context/contactContext";

const Contact = ({ searchQuery }) => {
  const { contact } = useContactContext();

  const filterContacts = contact.filter((contact) => {
    const full_name = `${contact.first_name} ${contact.last_name}`;
    return (
      contact.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      full_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <div className='contactList'>
        {filterContacts.map((item, index) => (
          <div className='contactCard' key={index}>
            <img src={item.avatar} alt='noimageload' className='profileImage' />
            <div className='contactinfo'>
              <p className='contactName'>
                {item.first_name} {item.last_name}
              </p>
              <p>{item.email}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
