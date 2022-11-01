import React, { Component, useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import { More, Main } from './components';
import useStyles from './styles';
import { PhoneForwardedRounded } from '@material-ui/icons';
import Header from './components/Header';
import './App.css';

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Header />
      <div className='tous'>
          <div>
          <Grid  className='main'>
              <Main />
          </Grid>
          </div>
          <div className='graphe'>
            <Grid className='income'>
              <More title="Income" />
            </Grid>
            <Grid className='expense'>
              <More title="Expense" />
            </Grid>
          </div>
      </div>
    </div>
  );
};

export default App;
