import React, { useEffect } from 'react';

// Redux logic
import { connect } from 'react-redux';
import { State } from '@ducks/reducers';
import * as SystemActions from '@ducks/system/actions';

// Helmet
import Helmet from 'react-helmet';

// Material ui utils
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// SSR
import { graphql, useStaticQuery } from 'gatsby';

// Material ui / components / icons
// import XIcon from "@material-ui/icons/XIcon";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Drawer from '@containers/Drawer';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      flexDirection: `column`,
    },
    item: {
      width: `auto`,
      height: `300px`,
      display: `flex`,
    },
    header: {
      width: `auto`,
      height: `300px`,
      backgroundColor: `#000000aa`,
    },
    footer: {
      height: `300px`,
      paddingTop: theme.spacing.unit * 2,
      backgroundColor: theme.palette.grey.A200,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `center`,
    },
  });

interface LayoutProps extends WithStyles<typeof styles> {
  children: React.ReactNode;
  authStatusChannelSubscribe: any;
  authStatusChannelUnsubscribe: any;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  classes,
  authStatusChannelSubscribe,
  authStatusChannelUnsubscribe,
}) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          language
        }
      }
    }
  `);

  useEffect(() => {
    authStatusChannelSubscribe();
    return () => authStatusChannelUnsubscribe();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.root}>
      {
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
        </Helmet>
      }
      <Drawer />
      <Paper className={`${classes.header}`} />
      {children}

      <div className={classes.footer}>
        <Typography>Copyright ©</Typography>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  system: state.system,
});

const mapDispatchToProps = {
  authStatusChannelSubscribe: SystemActions.authStatusChannelSubscribe,
  authStatusChannelUnsubscribe: SystemActions.authStatusChannelUnsubscribe,
};

const connectedLayout = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
const withStylesLayout = withStyles(styles)(connectedLayout);

export default withStylesLayout;
