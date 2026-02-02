import { Drawer } from 'expo-router/drawer';
import { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { store } from '../store';

import { ThemeContext, ThemeProvider } from '../ThemeContext';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/* ---------------- React Query Client ---------------- */

const queryClient = new QueryClient();

/* ---------------- Header Toggle ---------------- */

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={toggleTheme} style={{ padding: 8 }}>
      <Text
        style={{
          color: theme === 'light' ? '#1976d2' : '#bb86fc',
          fontWeight: 'bold',
        }}
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </Text>
    </TouchableOpacity>
  );
}

/* ---------------- Layout ---------------- */

export default function Layout() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
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
                <Drawer.Screen name="profile" options={{ title: 'TodoList (useState)' }} />
                <Drawer.Screen name="settings" options={{ title: 'Counter (useReducer)' }} />
                <Drawer.Screen name="redux" options={{ title: 'Redux Counter' }} />
                <Drawer.Screen name="reactquery" options={{ title: 'React Query Users' }} />
                <Drawer.Screen name="zustand" options={{ title: 'Zustand Counter' }} />
              </Drawer>
            )}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
