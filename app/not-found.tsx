import { NextPage } from 'next';
import React from 'react';

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFoundPage;