/**
 *
 * SignIn
 *
 */

import React from 'react';

// Redux logic
import { connect } from 'react-redux';

// Redux actions
import * as SystemActions from '../../ducks/system/actions';

// Material ui utils
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// Material ui components / icons
// import XIcon from "@material-ui/icons/XIcon";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import SignInForm from './SignInForm';

// components

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      // marginRight: theme.spacing.unit,
      marginRight: 10,
    },
    button: {
      width: `250px`,
      margin: theme.spacing.unit,
    },
    paper: {
      padding: theme.spacing.unit,
      width: `300px`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
    },
  });

interface SignInProps extends WithStyles {
  signInPopUp: any;
  signIn: any;
  style?: any;
}

export const SignIn: React.FunctionComponent<SignInProps> = ({
  // eslint-disable-next-line no-shadow
  classes: { button, icon, paper },
  signIn,
  signInPopUp,
  ...props
}) => (
  <Paper {...props} className={paper}>
    <Button
      className={button}
      color="primary"
      variant="outlined"
      onClick={() => signInPopUp(`google`)}
    >
      Sign in with Google
    </Button>

    <Button
      color="primary"
      variant="outlined"
      className={button}
      onClick={() => signInPopUp(`facebook`)}
    >
      Sign in with Facebook
    </Button>
    <SignInForm onSubmit={signIn} />
  </Paper>
);

// const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = {
  signInPopUp: SystemActions.signInPopUp,
  signIn: SystemActions.signIn,
};

const connected = connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(SignIn);
const withStylesSignIn = withStyles(styles)(connected);

export default withStylesSignIn;
