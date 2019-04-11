// import { ApolloProvider } from 'react-apollo';
// import { client } from '@src/apollo/client';
// import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
//
// export const wrapRootElement = ({ element }) => (
//   <ApolloHooksProvider client={client}>
//     <ApolloProvider client={client}>{element}</ApolloProvider>
//   </ApolloHooksProvider>
// );

// Redux
// eslint-disable-next-line
import wrapWithProvider from '@utils/wrap-with-provider';
export const wrapRootElement = wrapWithProvider;

// Material ui
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import JssProvider from 'react-jss/lib/JssProvider';
// import getPageContext from './src/utils/getPageContext';
//
//
// function replaceRenderer({
//   bodyComponent,
//   replaceBodyHTMLString,
//   setHeadComponents,
// }) {
//   // Get the context of the page to collected side effects.
//   const muiPageContext = getPageContext();
//
//   const bodyHTML = renderToString(
//     <JssProvider registry={muiPageContext.sheetsRegistry}>
//       {bodyComponent}
//     </JssProvider>,
//   );
//
//   replaceBodyHTMLString(bodyHTML);
//   setHeadComponents([
//     <style
//       type="text/css"
//       id="jss-server-side"
//       key="jss-server-side"
//       dangerouslySetInnerHTML={{
//         __html: muiPageContext.sheetsRegistry.toString(),
//       }}
//     />,
//   ]);
// }
//
// exports.replaceRenderer = replaceRenderer;
