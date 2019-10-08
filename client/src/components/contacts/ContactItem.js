// @flow

import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext';

import type { Contact } from '../../context/contact/ContactState';

const ContactItem = ({ contact }: {contact:Contact}) => 
{
  const contactContext = useContext(ContactContext);
  const { deleteContact } = contactContext;

  const { id, name, email, phone, type }: Contact = contact;

  const onDelete = () =>
  {
      deleteContact(id);
  }

  return (
    <div className='card bg-light'>
      <h3 className="test-primary text-left">
        {name}{' '} 
        <span 
        style={{ float: 'right' }}
        className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && 
        (<li>
          <i className="fas fa-envelope-open"></i> {email}
        </li>)}
        {phone && 
        (<li>
          <i className="fas fa-envelope-open"></i> {phone}
        </li>)}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

export default ContactItem
