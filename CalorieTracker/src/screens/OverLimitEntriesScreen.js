import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import EntriesList from '../components/EntriesList';
import { fetchEntries } from '../api/services';
import { useFocusEffect } from '@react-navigation/native';

const OverLimitEntriesScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);

  const fetchOverLimitEntries = async () => {
    const allEntries = await fetchEntries();
    const overLimitEntries = allEntries.filter(entry => entry.calories > 500 && !entry.reviewed);
    setEntries(overLimitEntries);
  };

  useEffect(() => {
    fetchOverLimitEntries();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchOverLimitEntries();
    }, [])
  );

  return (
    <View style={styles.container}>
      <EntriesList 
        entries={entries} 
        navigation={navigation} 
        onEntriesChange={setEntries} 
        overLimit={true}
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

export default OverLimitEntriesScreen;
