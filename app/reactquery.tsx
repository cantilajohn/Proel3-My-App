import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../ThemeContext';

type User = {
  id: number;
  name: string;
  email: string;
};

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Network error');
  }
  return res.json();
};

export default function ReactQueryUsers() {
  const { theme } = useContext(ThemeContext);

  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>Error fetching users</Text>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'light' ? '#f5f5f5' : '#121212' },
      ]}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.item,
              { backgroundColor: theme === 'light' ? '#fff' : '#1f1f1f' },
            ]}
          >
            <Text style={{ color: theme === 'light' ? '#000' : '#fff', fontWeight: 'bold' }}>
              {item.name}
            </Text>
            <Text style={{ color: theme === 'light' ? '#555' : '#ccc' }}>
              {item.email}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
