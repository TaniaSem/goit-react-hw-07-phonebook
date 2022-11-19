import { ContactElement } from 'components/ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.stateRedux.contacts);
  const filter = useSelector(state => state.stateRedux.filter);
  const dispatch = useDispatch();
  console.log(filter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactElement
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={deleteContactById}
        />
      ))}
    </List>
  );
};
