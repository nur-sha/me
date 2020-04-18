import React, { ReactNode } from 'react';
import { ListItem, ListItemIcon } from '@material-ui/core';
import LensOutlinedIcon from '@material-ui/icons/LensOutlined';

export interface ContentListItemProps {
  children: ReactNode;
  key: string;
}

const ContentListItem = ({ children, key }: ContentListItemProps) => {
  return (
    <ListItem key={key}>
      <ListItemIcon>
        <LensOutlinedIcon color='secondary' fontSize='inherit' />
      </ListItemIcon>
      {children}
    </ListItem>
  );
};

export default ContentListItem;
