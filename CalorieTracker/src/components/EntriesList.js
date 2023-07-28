import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EntriesList = ({ entries, navigation, overLimit }) => {
  const renderEntry = ({ item }) => {
    return (
      <TouchableOpacity style={styles.entry} onPress={() => navigation.navigate('EditEntry', { id: item.id })}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.entryText}>{item.description}</Text>
        </View>
        <View style={[styles.caloriesContainer, { backgroundColor: getColor(item.calories) }]}>
          <Text style={styles.caloriesText}>{item.calories}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Helper function to determine the color based on calories
  const getColor = (calories) => {
    return calories > 500 ? '#DC3545' : '#007BFF';
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={overLimit ? entries.filter(entry => entry.calories > 500) : entries}
        renderItem={renderEntry}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  entry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: '#DDD',
    borderWidth: 1,
  },
  descriptionContainer: {
    flex: 1,
  },
  entryText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
  },
  caloriesContainer: {
    width: 50, // Fixed width for the calories container
    paddingVertical: 5,
    borderRadius: 20,
  },
  caloriesText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default EntriesList;
