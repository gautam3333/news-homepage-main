import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className='error_page'>
      <h1>Oops 😭</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='error_page_msg'>{error.statusText || error.message}</p>
    </div>
  );
}
