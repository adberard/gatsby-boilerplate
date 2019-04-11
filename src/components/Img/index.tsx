/**
 *
 * Img
 *
 */

import React from 'react';

// Material ui utils
import { WithStyles, withStyles, createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    img: {
      display: `block`,
      maxWidth: `100%`,
      height: `auto`,
    },
  });

interface ImgProps extends WithStyles<typeof styles> {
  src?: string;
  width?: string;
  height?: string;
  right?: boolean;
  name?: string;
}

const Img: React.FunctionComponent<
  ImgProps & React.HTMLAttributes<HTMLDivElement>
> = ({ classes, src, width, height, ...props }) => (
  <div {...props}>
    <img className={classes.img} src={src} width={width} height={height} />
  </div>
);

const withStylesImg = withStyles(styles)(Img);

export default withStylesImg;
