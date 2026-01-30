import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { ThemeContext } from '../ThemeContext';

export default function TodoList() {
  const { theme } = useContext(ThemeContext);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f5f5f5' : '#121212' }]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: theme === 'light' ? '#fff' : '#1f1f1f', color: theme === 'light' ? '#000' : '#fff' }]}
          placeholder="Enter task"
          placeholderTextColor={theme === 'light' ? '#888' : '#ccc'}
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={[styles.addButton, { backgroundColor: '#4CAF50' }]} onPress={addTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.taskItem, { backgroundColor: theme === 'light' ? '#fff' : '#1f1f1f' }]}>
            <Text style={{ color: theme === 'light' ? '#000' : '#fff' }}>{item}</Text>
            <TouchableOpacity style={[styles.removeButton, { backgroundColor: '#e53935' }]} onPress={() => removeTask(index)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  inputContainer: { flexDirection: 'row', marginBottom: 15 },
  input: { flex: 1, padding: 10, borderRadius: 5, borderWidth: 1, borderColor: '#ccc' },
  addButton: { padding: 10, marginLeft: 10, borderRadius: 5, justifyContent: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  taskItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderRadius: 5, marginBottom: 10 },
  removeButton: { padding: 6, borderRadius: 4 },
  removeText: { color: '#fff', fontSize: 12 },
});
