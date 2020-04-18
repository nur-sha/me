import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import PotraitImage, { PotraitImageData } from '../../components/potraitImage';

export interface PotraitWithContentProps {
  potraitData: PotraitImageData;
  children: ReactNode;
}

const PotraitWithContent = ({
  children,
  potraitData,
}: PotraitWithContentProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PotraitImage content={potraitData} />
      </Grid>
      <Grid item xs={12} md={5}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PotraitWithContent;
