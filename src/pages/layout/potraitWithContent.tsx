import React, { ReactNode } from 'react';
import { Grid, GridProps } from '@material-ui/core';
import PotraitImage, { PotraitImageData } from '../../components/potraitImage';

export interface PotraitWithContentProps extends GridProps {
  potraitData: PotraitImageData;
  children: ReactNode;
}

const PotraitWithContent = ({
  children,
  potraitData,
  ...props
}: PotraitWithContentProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PotraitImage content={potraitData} />
      </Grid>
      <Grid item xs={12} md={5} {...props}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PotraitWithContent;
