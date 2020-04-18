import React from 'react';
import { Typography } from '@material-ui/core';
import BasicList from '../../../components/list/basicList';

export interface InterestProps {
  className?: string;
  content: string[];
}

const Interest = ({ content }: InterestProps) => {
  return (
    <>
      <Typography variant='h4'>Interest</Typography>
      <BasicList list={content} />
    </>
  );
};

export default Interest;
