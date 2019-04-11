// https://material-ui.com/guides/typescript/#usage-of-component-property

import React from 'react';
import { Link } from 'gatsby';
import Fab, { FabProps } from '@material-ui/core/Fab';

interface LinkButtonProps extends FabProps {
  to: string;
  replace?: boolean;
}

const LinkFab = (props: LinkButtonProps): JSX.Element => (
  <Fab {...props} component={Link as any} />
);

export default LinkFab;
