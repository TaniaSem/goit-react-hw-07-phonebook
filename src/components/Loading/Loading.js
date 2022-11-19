import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

export const Loading = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>{isLoading && !error && <b>Loading contacts. Please, wait.</b>}</div>
  );
};
