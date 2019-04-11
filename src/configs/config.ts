// eslint-disable-next-line no-nested-ternary
const config =
  process.env.NODE_ENV === `production`
    ? {
      // prod config
    }
    : process.env.NODE_ENV === `test`
      ? {
        // test config
      }
      : {
        // dev config
      };

export default config;
