// @flow

import { stat } from 'fs';

export type ActionType = 'ADD_CONTACT' | 'DELETE_CONTACT' | 'SET_CURRENT' | 'CLEAR_CURRENT' | 'UPDATE_CONTACT' | 'FILTER_CONTACTS' | 'CLEAR_FILTER' | 'SET_ALERT' | 'REMOVE_ALERT';

export type Action = {
   type: ActionType,
   payload: any
}

export default (state: any, action: Action) => {
   switch(action.type)
   {
      case 'ADD_CONTACT':
         return {
            ...state,
            contacts: [...state.contacts, action.payload]
         };
      case 'DELETE_CONTACT':
         return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
         };
      default:
         return state;
   }
}