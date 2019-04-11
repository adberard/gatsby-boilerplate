/**
 *
 * UserMenu
 *
 */

// Redux logic
import { connect } from 'react-redux';

// Redux actions
import * as SystemActions from '@ducks/system/actions';

// Interfaces / types
import { State } from '@ducks/reducers';
import { ISystem } from '@ducks/system/reducers';

// Material ui components / icons
import React, { useState } from 'react';

// Material ui utils
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// Material ui components / icons
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SignInButton from './SignInButton';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: `absolute`,
      right: 0,
      // backgroundColor: `black`,
      // borderRadius: `40px`,
    },
    menuButton: {
      textTransform: 'none',
      '& p': {
        marginRight: theme.spacing.unit * 2,
      },
    },
  });

interface UserMenuProps extends WithStyles {
  signOut: any;
  system: ISystem;
}

const UserMenu: React.FunctionComponent<UserMenuProps> = ({
  classes,
  system,
  signOut,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: any) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!system.loggedIn) {
    return (
      <div className={classes.root}>
        <SignInButton />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Button
        className={classes.menuButton}
        onClick={handleMenu}
        color="primary"
      >
        {system.firebaseUserInfo.displayName ? (
          <Typography color="inherit">
            {system.firebaseUserInfo.displayName}
          </Typography>
        ) : (
          <Typography color="inherit">
            {system.firebaseUserInfo.email}
          </Typography>
        )}
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
      </Button>
      <Popover
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            signOut();
            handleClose();
          }}
        >
          Sign Out
        </MenuItem>
      </Popover>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  system: state.system,
});

const mapDispatchToProps = {
  signOut: SystemActions.signOut,
};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserMenu);
const withStylesUserMenu = withStyles(styles)(connected);
export default withStylesUserMenu;
