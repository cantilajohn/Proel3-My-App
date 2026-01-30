import { Provider } from 'react-redux';
import { store } from '../store'; // adjust path if needed
import { ThemeProvider, ThemeContext } from '../ThemeContext';
import { Drawer } from 'expo-router/drawer';
import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <TouchableOpacity onPress={toggleTheme} style={{ padding: 8 }}>
      <Text style={{ color: theme === 'light' ? '#1976d2' : '#bb86fc', fontWeight: 'bold' }}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </Text>
    </TouchableOpacity>
  );
}

export default function Layout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <Drawer
              screenOptions={{
                headerStyle: {
                  backgroundColor: theme === 'light' ? '#fff' : '#121212',
                },
                headerTintColor: theme === 'light' ? '#121212' : '#fff',
                headerRight: () => <ThemeToggleButton />,
              }}
            >
              <Drawer.Screen name="index" options={{ title: 'Home' }} />
              <Drawer.Screen name="profile" options={{ title: 'TodoList' }} />
              <Drawer.Screen name="settings" options={{ title: 'useReducer' }} />
              <Drawer.Screen name="redux" options={{ title: 'Redux Counter' }} />
            </Drawer>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </Provider>
  );
}
