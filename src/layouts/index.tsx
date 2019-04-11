import React from 'react';
import Providers from '@layouts/Providers';
import Layout from '@layouts/Layout';

// eslint-disable-next-line react/display-name
export default ({ children }: any) => {
  return (
    <Providers>
      <Layout>{children}</Layout>
    </Providers>
  );
};
