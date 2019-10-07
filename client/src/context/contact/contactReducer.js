// @flow

import {
   ADD_CONTACT,
   DELETE_CONTACT,
   CLEAR_CURRENT,
   UPDATE_CONTACT,
   FILTER_CONTACTS,
   CLEAR_FILTER
} from '../types';

export default (state: any, action: any) => {
   switch(action.type)
   {
      case ADD_CONTACT:
         return {
            ...state,
            contacts: [...state.contacts, action.payload]
         };
      default:
         return state;
   }
}