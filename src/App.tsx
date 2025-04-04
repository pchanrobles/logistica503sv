import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider as CustomThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Footer from './components/common/Footer';

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
};

export default App;