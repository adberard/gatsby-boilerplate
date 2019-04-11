/**
 *
 * Privacy
 *
 */

import React from 'react';

// Material ui utils
import { withStyles, createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// Material ui components / icons
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      alignContent: `center`,
      justifyContent: `center`,
    },
    member: {
      textAlign: `center`,
      margin: theme.spacing.unit * 2,
      maxWidth: `900px`,
    },
    logo: {
      margin: theme.spacing.unit * 2,
      verticalAlign: `top`,
    },
  });

interface PrivacyProps {
  classes: any;
  name?: any;
}

export const Privacy: React.FunctionComponent<PrivacyProps> = ({
  classes,
  ...props
}) => (
  <div className={classes.root} {...props}>
    <div className={classes.member}>
      <Typography variant="h2" inline>
        Privacy policy
      </Typography>
      <Typography component="p" gutterBottom>
        privacy
      </Typography>
      <br />
    </div>
  </div>
);

const withStylesPrivacy = withStyles(styles)(Privacy);

export default withStylesPrivacy;
