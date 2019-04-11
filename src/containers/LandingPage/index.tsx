/**
 *
 * LandingPageGenerator
 *
 */

import React from 'react';

// Interfaces / types
// import { State } from '../../ducks/reducers';

// Material ui utils
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// Material ui components / icons
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FixtureImg from '@assets/Categories/justice.jpg';
import Fade from 'react-reveal/Fade';

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      marginRight: theme.spacing.unit,
    },
    button: {
      display: `block`,
      margin: theme.spacing.unit,
    },
    item: {
      height: `300px`,
      textAlign: `center`,
      width: `300px`,
      margin: theme.spacing.unit * 4,
    },
    container: {
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      flexDirection: `column`,
      textAlign: `center`,
    },
  });

interface LandingPageGeneratorProps extends WithStyles<typeof styles> {
  size?: number;
  handClick?: any;
}

export const LandingPageGenerator: React.FunctionComponent<
  LandingPageGeneratorProps
> = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Paper id="item1" className={classes.item} />
      <Paper id="item2" className={classes.item} />
      <Paper id="item3" className={classes.item} />
      <Paper id="item5" className={classes.item} />
      <Paper id="item6" className={classes.item} />
      <Paper id="item7" className={classes.item} />
    </div>
  );
};

const withStylesLandingPageGenerator = withStyles(styles)(LandingPageGenerator);

export default withStylesLandingPageGenerator;
