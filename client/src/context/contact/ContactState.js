// @flow

import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import type { ActionType } from './contactReducer';
import type { Action } from './contactReducer';

//#region types
export type Contact = {|
   id: number,
   type: "personal" | "professional",
   name: string,
   email: string,
   phone: string
|}

type ContactsState = {|
   contacts: Contact[],
   current: ?Contact
|}

type Dispatch = (Action) => any;
//#endregion

const ContactState = (props: any) => 
{
   const initialState: ContactsState = 
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
      ],
      current: null
   };

   // state allows us to access anything in our state and dispatch allows us to dispatch objects to the reducer
   const [state, dispatch]: [any, Dispatch] = useReducer(contactReducer, initialState);

   // Add Contact
   const addContact = (contact: Contact) => {
      contact.id = parseInt(uuid.v4());
      dispatch({ type: 'ADD_CONTACT', payload: contact });
   }

   // Delete Contact
   const deleteContact = (id: number) => {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
   }

   // Set Current Contact
   const setCurrent = (contact: Contact) => {
      dispatch({ type: 'SET_CURRENT', payload: contact });
   }

   // Clear Current Contact
   const clearCurrent = () => {
      dispatch({ type: 'CLEAR_CURRENT' });
   }

   // Update Contact

   // Filter Contacts

   // Clear Filter

   return (
      <ContactContext.Provider
         value={{ 
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent
          }}>
         { props.children }
      </ContactContext.Provider>
   );
};

export default ContactState;