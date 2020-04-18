import React, { useEffect, useState } from 'react';
import {
  Snackbar,
  makeStyles,
  createStyles,
  SnackbarProps,
  Theme,
  Grow,
  LinearProgress,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      background: theme.palette.primary.main,
      minWidth: '100px',
      padding: '12px',
      textAlign: 'center',
      color: theme.palette.background.default,
      opacity: '0.8 !important',
      position: 'relative',
    },
    progress: {
      height: '4px',
      width: '100%',
      left: 0,
      bottom: 0,
      position: 'absolute',

      '& .MuiLinearProgress-colorPrimary': {
        background: 'pink',
      },
    },
  }),
);

export interface NotificationProps extends SnackbarProps {
  className?: string;
}

function TransitionUp(props: TransitionProps) {
  return <Grow {...props} />;
}

const Notification = ({
  className,
  children,
  open,
  autoHideDuration,
  ...props
}: NotificationProps) => {
  const classes = useStyles();

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    if (typeof autoHideDuration !== 'number') {
      return;
    }
    const progress = () => {
      setCompleted(oldCompleted => {
        const increment = Math.round((100 / (autoHideDuration - 200)) * 100);
        return oldCompleted >= 100 ? 100 : oldCompleted + increment;
      });
    };

    if (open) {
      const timer = setInterval(progress, 100);
      return () => {
        clearInterval(timer);
        setCompleted(0);
      };
    }
  }, [open, autoHideDuration]);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      TransitionComponent={TransitionUp}
      autoHideDuration={autoHideDuration}
      {...props}
    >
      <div className={classes.wrapper}>
        {children}
        {open && autoHideDuration && (
          <LinearProgress
            color='secondary'
            className={classes.progress}
            variant='determinate'
            value={completed}
          />
        )}
      </div>
    </Snackbar>
  );
};

export default Notification;
