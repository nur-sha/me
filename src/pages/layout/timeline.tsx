import React, { ReactNode } from 'react';
import { Typography, List } from '@material-ui/core';
import PotraitWithContent from './potraitWithContent';
import {
  convertNumberToMonthName,
  breakMonthYear,
} from '../../utilities/utility';
import ContentListItem from '../../components/list/contentList';
import MultiContent from '../../components/multiContent';
import { PotraitImageData } from '../../components/potraitImage';

export interface TimelineData {
  title: string;
  caption: string;
  from: string;
  end?: string;
  description?: string;
}

export interface TimelineProps {
  pageTitle: string;
  data: TimelineData[];
  potraitSection: PotraitImageData;
  children?: ReactNode;
}

const Timeline = ({
  pageTitle,
  data,
  potraitSection,
  children,
}: TimelineProps) => {
  const displayDuration = (serveFrom: string, serveEnd?: string): string => {
    const startPeriod = convertNumberToMonthName(serveFrom);
    const endPeriod = serveEnd ? convertNumberToMonthName(serveEnd) : 'Present';

    return `${startPeriod} - ${endPeriod}`;
  };

  const formatDate = (value: string): number => {
    const regex = [/^(0?[1-9]|1[0-2])-(\d{4})$/, /^\d{4}$/];
    const hasValidValue = regex.some(item => item.test(value));

    if (!hasValidValue) {
      return -31;
    }

    const valueArray = breakMonthYear(value);

    return Array.isArray(valueArray)
      ? +valueArray.reverse().join('')
      : +valueArray;
  };

  data.sort((a, b) => {
    const dateA = formatDate(a.from);
    const dateB = formatDate(b.from);

    return dateA > dateB ? -1 : dateB > dateA ? 0 : 0;
  });

  return (
    <PotraitWithContent potraitData={potraitSection}>
      <Typography variant='h2'>{pageTitle}</Typography>
      <List disablePadding>
        {data.map((item, index) => {
          return (
            <ContentListItem key={item.caption}>
              <MultiContent
                color={index === 0 ? 'secondary' : 'primary'}
                subTitle={displayDuration(item.from, item.end)}
                title={item.title}
                caption={item.caption}
                description={item.description}
              />
            </ContentListItem>
          );
        })}
      </List>
      {children && children}
    </PotraitWithContent>
  );
};

export default Timeline;
