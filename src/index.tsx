    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    
    import { ChakraProvider, extendTheme, ColorModeScript, ThemeConfig } from '@chakra-ui/react';
    
    const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};


const theme = extendTheme({ config });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
    root.render(
      <React.StrictMode>
        {/* Pass the 'theme' object to ChakraProvider */}
        <ChakraProvider theme={theme}>
          {/* Step 3: ColorModeScript ensures correct mode on page load */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </React.StrictMode>
    );

    reportWebVitals();
    