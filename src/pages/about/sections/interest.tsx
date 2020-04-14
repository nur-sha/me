import React from 'react';
import { Typography } from '@material-ui/core';
import Bullets from '../../../components/bullets';

export interface InterestProps {
  className?: string;
  content: string[];
}

const Interest = ({ content }: InterestProps) => {
  return (
    <>
      <Typography variant='h4'>Interest</Typography>
      <Bullets list={content} />
    </>
  );
};

export default Interest;
