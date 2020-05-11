import React, { useState } from 'react';
import { Paper, Typography, Grid, Dialog, Hidden } from '@material-ui/core';
import { summaryList } from './data';
import ZoomInSharpIcon from '@material-ui/icons/ZoomInSharp';
import SwipeableViews from 'react-swipeable-views';
import useStyles from './styles';
import Ratings from '../../components/ratings';
import { CloseIcon, BackIcon, NextIcon } from '../../components/icons';
import BasicList from '../../components/list/basicList';

const Projects = () => {
  const classes = useStyles();
  const [showContent, setShow] = useState(false);
  const [activeIndex, setIndex] = useState(0);
  const [animateTransitions, setAnimate] = useState(true);

  const sortedData = summaryList.sort((a, b) => {
    if (a.isHighlight !== b.isHighlight) {
      return a.isHighlight ? -1 : 1;
    } else {
      return a.year < b.year ? 1 : -1;
    }
  });

  const detailList = sortedData.filter((item) => item.isHighlight);

  const setActiveIndex = (activeId: number) => {
    const index = detailList.findIndex((data) => data.id === activeId);
    setIndex(index);
  };

  const handleClick = (activeId?: number) => {
    setAnimate(!showContent);
    setShow(!showContent);
    setActiveIndex(activeId || 0);
  };

  const handleBackBtn = () => {
    setIndex(activeIndex === 0 ? 0 : activeIndex - 1);
  };

  const handleNextBtn = () => {
    setIndex(
      activeIndex === detailList.length - 1
        ? detailList.length - 1
        : activeIndex + 1,
    );
  };

  return (
    <>
      <Typography variant='h1' align='center'>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {sortedData.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
              <Paper
                className={classes.paper}
                variant='outlined'
                elevation={1}
                {...(item.isHighlight && {
                  onClick: () => handleClick(item.id),
                  style: {
                    cursor: 'pointer',
                  },
                })}
              >
                <div className={classes.flex}>
                  <Typography variant='h4'>{item.name}</Typography>
                  {item.isHighlight && (
                    <ZoomInSharpIcon className={classes.icon} />
                  )}
                </div>
                <Typography variant='body1'>{item.company}</Typography>
                <Typography variant='caption' className={classes.caption}>
                  {item.caption}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Dialog
        fullScreen={true}
        open={showContent}
        onClose={() => handleClick()}
        PaperProps={{
          className: classes.modalPaper,
        }}
        maxWidth='md'
      >
        <div>
          <div className={classes.controller}>
            <Ratings
              maxRating={detailList.length}
              activeNumber={activeIndex}
              highlightActiveOnly
            />

            <div className={classes.iconClose}>
              <CloseIcon fontSize='large' onClick={() => handleClick()} />
            </div>
          </div>

          <Hidden smDown>
            <div className={classes.desktopControl}>
              <BackIcon className={classes.back} onClick={handleBackBtn} />
              <NextIcon className={classes.next} onClick={handleNextBtn} />
            </div>
          </Hidden>

          <SwipeableViews
            ignoreNativeScroll
            enableMouseEvents
            index={activeIndex}
            onChangeIndex={(index) => {
              setIndex(index);
            }}
            animateTransitions={animateTransitions}
            animateHeight
            style={{
              marginTop: '5rem',
            }}
          >
            {detailList.map((item) => {
              return (
                <div key={item.id}>
                  <Typography variant='h2'>{item.name}</Typography>
                  <Typography variant='body1'>{item.company}</Typography>
                  <div className={classes.description}>
                    <Typography variant='body1'>{item.description}</Typography>
                    {item.role && <BasicList list={item.role} />}
                  </div>
                </div>
              );
            })}
          </SwipeableViews>
        </div>
      </Dialog>
    </>
  );
};

export default Projects;
