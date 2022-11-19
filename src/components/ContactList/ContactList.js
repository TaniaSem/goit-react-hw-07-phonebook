import { ContactElement } from 'components/ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactElement
          key={id}
          id={id}
          name={name}
          number={phone}
          onDeleteContact={deleteContactById}
        />
      ))}
    </List>
  );
};
