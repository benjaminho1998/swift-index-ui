import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000',
    },
  },
  typography: {
    header: {
      color: '#000',
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif'
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif'
    },
    h4: {
      fontWeight: '800',
      textDecoration: 'line-through',
      fontFamily: 'Fjalla One, sans-serif'
    },
    body1: {
      fontSize: '18px',
      fontWeight: 500
    },
    subtitle1: {
      fontSize: '20px',
      fontWeight: 500
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
