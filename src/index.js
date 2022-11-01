import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "./context/context";
import { SpeechProvider, SpeechState, useSpeechContext } from "@speechly/react-client";
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider>
     <Provider>
     <App/>
     </Provider>
    </SpeechProvider>,
   
document.getElementById('root'));