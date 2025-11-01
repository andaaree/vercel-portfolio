import React from 'react';
import '../pages/home/home.css';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="container">
      <div className="flex flex-col justify-center items-baseline">
        <div className="m-auto">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.error.message}</i>
          </p>
          <h2>Detail : <code>{error.error.message}</code></h2>
        </div>
      </div>
    </div>
  );
}