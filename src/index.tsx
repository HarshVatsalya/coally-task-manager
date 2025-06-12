    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    
    import { ChakraProvider, extendTheme } from '@chakra-ui/react';

    
    const theme = extendTheme({}); 

    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );

    root.render(
      <React.StrictMode>
        {/* Pass the 'theme' object to ChakraProvider */}
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    );

    reportWebVitals();
    