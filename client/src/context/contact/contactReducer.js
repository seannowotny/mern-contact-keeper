// @flow

// import type { ContactsState } from '../../context/contact/ContactState';

export type ActionType = 'ADD_CONTACT' | 'DELETE_CONTACT' | 'SET_CURRENT' | 'CLEAR_CURRENT' | 'UPDATE_CONTACT' | 'FILTER_CONTACTS' | 'CLEAR_FILTER' | 'SET_ALERT' | 'REMOVE_ALERT';

export type Action = {|
   type: ActionType,
   payload: any
|}

export default (state: any, action: Action) => {
   switch(action.type)
   {
      case 'ADD_CONTACT':
         return {
            ...state,
            contacts: [...state.contacts, action.payload]
         };
      case 'UPDATE_CONTACT':
         return {
            ...state,
            contacts: state.contacts.map(contact => 
               contact.id === action.payload.id 
               ? action.payload : contact
            )
         }
      case 'DELETE_CONTACT':
         return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
         };
      case 'SET_CURRENT':
         return {
            ...state,
            current: action.payload
         }
      case 'CLEAR_CURRENT':
      return {
         ...state,
         current: null
      }
      default:
         return state;
   }
}