import React from 'react';
import { Typography } from '@material-ui/core';
import PotraitWithContent from '../layout/potraitWithContent';
import data from './data';
import DownloadButton from '../../components/downloadButton';

const Contact = () => {
  return (
    <PotraitWithContent
      potraitData={data.potraitSection}
      justify='center'
      direction='column'
      container
    >
      <Typography variant='h1'>Say hello.</Typography>
      <Typography variant='h5'>nurshahadahrashid@gmail.com</Typography>
      <Typography variant='h5'>+65 8668 0912</Typography>
      <DownloadButton />
    </PotraitWithContent>
  );
};

export default Contact;
