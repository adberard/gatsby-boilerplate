/**
 *
 * SignInButton
 *
 */

// Material ui components / icons
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';

// import { connect } from 'react-redux';

// utils

// Material ui utils
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// Material ui components / icons
import Dialog from '@material-ui/core/Dialog';
import Zoom from '@material-ui/core/Zoom';

import SignIn from '@components/SignInForm';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // backgroundColor: `black`,
      // borderRadius: `40px`,
    },
    menu: {
      textAlign: `center`,
    },
    menuButton: {
      marginRight: theme.spacing.unit * 2,
      margintop: theme.spacing.unit,
      height: `34px`,
      width: `100px`,
      '& p': {
        marginRight: theme.spacing.unit * 2,
      },
      [theme.breakpoints.down(`sm`)]: {
        width: `100px`,
        height: `50px`,
      },
    },
  });

interface SignInButtonProps extends WithStyles {}

const SignInButton: React.FunctionComponent<SignInButtonProps> = ({
  classes,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root} {...props}>
      <Button
        className={classes.menuButton}
        onClick={() => setOpen(true)}
        color="primary"
        variant="contained"
      >
        Sign in
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Zoom}
      >
        <SignIn />
      </Dialog>
    </div>
  );
};

const withStylesSignInButton = withStyles(styles)(SignInButton);
export default withStylesSignInButton;
