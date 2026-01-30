import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, increment, decrement } from '../store';
import { ThemeContext } from '../ThemeContext';

export default function ReduxCounter() {
  const { theme } = useContext(ThemeContext);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f5f5f5' : '#121212' }]}>
      <Text style={[styles.counter, { color: theme === 'light' ? '#121212' : '#fff' }]}>{count}</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#1976d2' }]} onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#1976d2' }]} onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>-</Text>
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
