import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { fetchEntry, deleteEntry, updateEntry } from '../api/services';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EditEntryScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchEntryDetails = async () => {
      const entryDetails = await fetchEntry(id);
      setEntry(entryDetails);
    };

    fetchEntryDetails();
  }, [id]);

  const handleDelete = async () => {
    Alert.alert(
      'Confirm delete',
      'Are you sure you want to delete this entry?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: async () => {
            await deleteEntry(id);
            Alert.alert('Delete successful', 'Entry has been deleted successfully.');
            navigation.goBack();
          }
        }
      ]
    );
  };

  const handleMarkReviewed = () => {
    Alert.alert(
      'Confirm review',
      'Do you want to mark this entry as reviewed?',
      [
        {
          text: 'No',
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: async () => {
            await updateEntry(id, { reviewed: true });
            Alert.alert('Marked as reviewed', 'Entry has been marked as reviewed.');
            navigation.goBack();
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {entry && (
        <View style={styles.card}>
          <View style={styles.details}>
            <Text style={styles.label}>Calories: {entry.calories}</Text>
            <Text style={styles.label}>Description: {entry.description}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={handleDelete} style={[styles.button, { backgroundColor: 'red' }]}>
              <MaterialCommunityIcons name="trash-can-outline" size={30} color="white" />
            </TouchableOpacity>
            {entry.calories > 500 && !entry.reviewed && (
              <TouchableOpacity onPress={handleMarkReviewed} style={[styles.button, { backgroundColor: 'green' }]}>
                <MaterialCommunityIcons name="check" size={30} color="white" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Center horizontally
    backgroundColor: '#F5F5F5',
    paddingTop: 20, // Add paddingTop to move the card container to the top
  },
  card: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  details: {
    alignItems: 'center', // Center content horizontally within the card
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default EditEntryScreen;
