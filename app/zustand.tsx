import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import { useZustandCounter } from '../zustandStore';

export default function ZustandCounter() {
  const { theme } = useContext(ThemeContext);
  const { count, increment, decrement } = useZustandCounter();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'light' ? '#f5f5f5' : '#121212' },
      ]}
    >
      <Text
        style={[
          styles.counter,
          { color: theme === 'light' ? '#121212' : '#fff' },
        ]}
      >
        {count}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#009688',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
