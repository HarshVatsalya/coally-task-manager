    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    // Import ChakraProvider AND extendTheme
    import { ChakraProvider, extendTheme } from '@chakra-ui/react';

    // Create a basic theme object
    const theme = extendTheme({}); // This ensures 'theme' is of the correct type

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
    