import { useLocation } from 'react-router-dom';

export default function NotFoundView() {
  const history = useLocation();

  const onGoBack = () => {
    history.push('/');
  };
  return (
    <>
      <h2>404 Not Found </h2>
      <button type="button" onClick={onGoBack}>
        Go home
      </button>
    </>
  );
}