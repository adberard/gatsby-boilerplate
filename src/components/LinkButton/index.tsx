// https://material-ui.com/guides/typescript/#usage-of-component-property

import React from 'react';
import { Link } from 'gatsby';
import Button, { ButtonProps } from '@material-ui/core/Button';

interface LinkButtonProps extends ButtonProps {
  to: string;
  replace?: boolean;
}

const LinkButton = (props: LinkButtonProps): JSX.Element => (
  <Button {...props} component={Link as any} />
);

export default LinkButton;
