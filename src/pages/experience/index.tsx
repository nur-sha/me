import React from 'react';

import data from './data';
import Timeline from '../layout/timeline';

const Experience = () => {
  return (
    <Timeline
      pageTitle='Experience'
      potraitSection={data.potraitSection}
      data={data.list}
    />
  );
};

export default Experience;
