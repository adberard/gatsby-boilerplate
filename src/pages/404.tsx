import React from 'react';
import { Helmet } from 'react-helmet';

export default function NotFoundPage() {
  return (
    <div>
      <Helmet>
        <title>Page not found</title>
      </Helmet>

      <h1>Page not found</h1>
      <p>The requested page is unavailable.</p>
    </div>
  );
}
