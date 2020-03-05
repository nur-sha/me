import React from 'react';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import IconButton from '@material-ui/core/IconButton';

const CopyButton = () => {
  return (
    <IconButton aria-label='delete'>
      <FileCopyOutlinedIcon fontSize='small' />
    </IconButton>
  );
};

export default CopyButton;
