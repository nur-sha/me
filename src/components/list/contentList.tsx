import React, { ReactNode } from 'react';
import { ListItem, ListItemIcon, ListItemProps } from '@material-ui/core';
import LensOutlinedIcon from '@material-ui/icons/LensOutlined';

export interface ContentListItemProps extends ListItemProps {
  children: ReactNode;
}

const ContentListItem = ({ children }: ContentListItemProps) => {
  return (
    <ListItem>
      <ListItemIcon>
        <LensOutlinedIcon color='secondary' fontSize='inherit' />
      </ListItemIcon>
      {children}
    </ListItem>
  );
};

export default ContentListItem;
