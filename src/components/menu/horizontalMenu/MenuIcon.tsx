import React, { MouseEvent } from 'react';
import { animated, useSpring, config } from 'react-spring';
import { useTheme, Theme } from '@material-ui/core';

const openedTransformationConfig = (theme: Theme) => ({
  top: 'translate(2, 3) rotate(0)',
  center: 'translate(2, 9) rotate(0)',
  bottom: 'translate(9, 15) rotate(0)',
  color: theme.palette.text.secondary,
});

const closedTransformationConfig = (theme: Theme) => ({
  top: 'translate(3, 17) rotate(-45)',
  center: 'translate(4, 3) rotate(45)',
  bottom: 'translate(3, 17) rotate(-45)',
  color: theme.palette.text.secondary,
});

interface MenuProps {
  isOpened: boolean;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

export function MenuIcon({ isOpened, onClick }: MenuProps) {
  const theme = useTheme();

  const { top, center, bottom, color } = useSpring({
    ...(isOpened
      ? closedTransformationConfig(theme)
      : openedTransformationConfig(theme)),
    config: config.stiff,
  });

  return (
    <span {...(onClick && { onClick })}>
      <animated.svg
        width='20'
        height='20'
        fill={color}
        xmlns='http://www.w3.org/2000/svg'
      >
        <animated.rect width='20' height='1' transform={top as string} />
        <animated.rect width='20' height='1' transform={center as string} />
        <animated.rect width='20' height='1' transform={bottom as string} />
      </animated.svg>
    </span>
  );
}
