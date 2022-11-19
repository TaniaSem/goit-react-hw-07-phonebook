import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { ListItem, BtnDelete, ItemText } from './ContactElement.styled';

export const ContactElement = ({ id, name, number, onDeleteContact }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <ListItem key={id}>
      <ItemText>
        {name}: {number}
      </ItemText>
      <BtnDelete onClick={() => onDeleteContact(id)} disabled={isLoading}>
        Delete
      </BtnDelete>
    </ListItem>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
