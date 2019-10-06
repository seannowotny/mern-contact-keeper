import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

// @flow

const ContactState = props => 
{
   const initialState = 
   {
      contacts: 
      [
         {
            id: 1,
            type: "personal",
            name: "Ted Johnson",
            email: "ted@gmail.com",
            phone: "111-111-1111",
         },
         {
            id: 2,
            type: "personal",
            name: "Sara Watson",
            email: "sara@gmail.com",
            phone: "222-222-2222",
         },
         {
            id: 3,
            type: "professional",
            name: "Harry White",
            email: "harry@gmail.com",
            phone: "333-333-3333",
         } 
      ]
   };

   const [state, dispatch] = useReducer(contactReducer, initialState);

   // Add Contact

   // Delete Contact

   // Set Current Contact

   // Clear Current Contact

   // Update Contact

   // Filter Contacts

   // Clear Filter

   return (
      <ContactContext.Provider
         value={{ 
            contacts: state.contacts
          }}>
         { props.children }
      </ContactContext.Provider>
   );
};

export default ContactState;