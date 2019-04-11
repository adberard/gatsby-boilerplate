import React from 'react';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import { Link } from 'gatsby';

interface ListItemLink extends ListItemProps {
  to: string;
}

const ListItemLink = (props: ListItemLink) => (
  <ListItem {...props} component={Link as any} />
);

export default ListItemLink;
