import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './navigation/Navigation';
import { ThemeProvider } from './constants/ThemeContext'; 

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
