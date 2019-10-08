// @flow

import React, { Fragment, useContext } from 'react'
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

import type { Contact } from '../../context/contact/ContactState';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts }: {|contacts:Contact[]|} = contactContext;

  return (
    <Fragment>
      {contacts.map(contact => (
        //Every React Element needs a key
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  )
}

export default Contacts
