import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../ThemeContext';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f5f5f5' : '#121212' }]}>
      <Text style={[styles.text, { color: theme === 'light' ? '#121212' : '#fff' }]}>
        State Management!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});
