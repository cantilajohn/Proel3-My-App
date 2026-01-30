import React, { useReducer, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../ThemeContext';

type State = { count: number };
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const initialState: State = { count: 0 };
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    default: return state;
  }
}

export default function Counter() {
  const { theme } = useContext(ThemeContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f5f5f5' : '#121212' }]}>
      <Text style={[styles.counter, { color: theme === 'light' ? '#121212' : '#fff' }]}>{state.count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#1976d2' }]} onPress={() => dispatch({ type: 'DECREMENT' })}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#1976d2' }]} onPress={() => dispatch({ type: 'INCREMENT' })}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  counter: { fontSize: 48, fontWeight: 'bold', marginBottom: 30 },
  buttonContainer: { flexDirection: 'row' },
  button: { paddingVertical: 15, paddingHorizontal: 30, marginHorizontal: 10, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
});
