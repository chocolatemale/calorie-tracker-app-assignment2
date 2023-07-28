import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import EntriesList from '../components/EntriesList';
import { fetchEntries } from '../api/services';
import { useFocusEffect } from '@react-navigation/native';

const AllEntriesScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);

  const fetchAllEntries = async () => {
    const allEntries = await fetchEntries();
    // Sort the entries based on their unique IDs in reverse order (newest first)
    const sortedEntries = allEntries.sort((a, b) => b.id.localeCompare(a.id));
    setEntries(sortedEntries);
  };

  useEffect(() => {
    fetchAllEntries();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchAllEntries();
    }, [])
  );

  return (
    <View style={styles.container}>
      <EntriesList 
        entries={entries} 
        navigation={navigation} 
        onEntriesChange={setEntries} 
        overLimit={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
});

export default AllEntriesScreen;