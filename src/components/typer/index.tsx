import React, { useState, useEffect } from 'react';
import { Typography, makeStyles, createStyles, Theme } from '@material-ui/core';

export interface WordType {
  word: string;
  className?: string;
  boldWordFromLast?: number;
}

export interface TyperProps {
  words: WordType[];
}

interface CurrentWord {
  char: string;
  className?: string;
  boldWordFromLast?: number;
}

interface TyperState {
  currentWord: CurrentWord[];
  message: CurrentWord[];
  isDeleting: boolean;
  loopNum: number;
  typingSpeed: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typer: {
      paddingBottom: '1rem',
    },
    text: {
      display: 'inline',
    },
    boldWord: { color: theme.palette.secondary.main },
    cursor: {
      borderLeft: `0.2em solid ${theme.palette.text.primary}`,
      animation: 'blink 0.7s steps(1) infinite',
    },
  }),
);

const Typer = ({ words }: TyperProps) => {
  const [state, setState] = useState<TyperState>({
    currentWord: [],
    message: [],
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 20,
  });

  const classes = useStyles();

  const getMessage = ({ loopNum }: TyperState, data: WordType[]) => {
    // words = [{word: 'hello', classNme:'class-1'}, {word: 'hello', classNme:'class-1'}]
    const i = loopNum % data.length;

    // wordObject = { word: 'i am a developer', className:'class-2' }
    const wordObject = data[i];

    const charArrays = Array.from(wordObject.word).map((item, index) => {
      let object = { char: `${item}` };

      if (wordObject.boldWordFromLast) {
        const split = wordObject.word.split(' ');
        split.splice(wordObject.boldWordFromLast * -1);
        const wordStop = split.join(' ').length;

        object = {
          ...object,
          ...(index >= wordStop && {
            className: classes.boldWord,
          }),
        };
      }

      return object;
    });

    return charArrays;
  };

  const getCurrentText = ({ message, currentWord, isDeleting }: TyperState) => {
    const wordLength = message.length;
    const currentWordLength = currentWord.length;

    if (isDeleting) {
      const remaining = currentWord.filter(
        (item, index) => index < currentWordLength - 1,
      );
      return remaining;
    }

    if (message.length < 1) {
      return [];
    }

    return currentWordLength === wordLength
      ? currentWord
      : [...currentWord, message[currentWordLength]];
  };

  const getTypingSpeed = ({ isDeleting }: TyperState): number => {
    return isDeleting ? 100 : 80;
  };

  useEffect(() => {
    let timer: number;
    const handleType = () => {
      setState((currentState) => ({
        ...currentState,
        currentWord: getCurrentText(currentState),
        typingSpeed: getTypingSpeed(currentState),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    const { isDeleting, message, currentWord } = state;
    if (!isDeleting && message.length === currentWord.length) {
      setTimeout(() => {
        setState((currentState) => ({
          ...currentState,
          isDeleting: true,
        }));
      }, 500);
    } else if (isDeleting && currentWord.length === 0) {
      setState((currentState) => ({
        ...currentState,
        isDeleting: false,
        loopNum: currentState.loopNum + 1,
        message: getMessage(currentState, words),
      }));
    }
  }, [state.currentWord, state.message, state.isDeleting, words]);

  return (
    <div className={classes.typer}>
      {state.currentWord.length > 0 &&
        state.currentWord.map((item, index) => {
          return (
            <Typography
              className={`${classes.text} ${item.className}`}
              variant='h5'
              key={index}
            >
              {item.char}
            </Typography>
          );
        })}
      <span className={classes.cursor} id='cursor' />
    </div>
  );
};

export default Typer;
