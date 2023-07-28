import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { addEntry } from '../api/services';

const AddEntryScreen = ({ navigation }) => {
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = async () => {
    if (!description || !calories || isNaN(calories) || Number(calories) < 0) {
      Alert.alert('Invalid data', 'Please ensure you enter valid data.');
      return;
    }

    const newEntryId = await addEntry({ description, calories: Number(calories) });
    console.log('AddEntryScreen New Entry ID:', newEntryId);
    Alert.alert('Add successful', 'Entry has been added successfully.');
    navigation.goBack();
  };

  const handleReset = () => {
    setDescription('');
    setCalories('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Calories</Text>
      <TextInput
        style={styles.input}
        value={calories}
        onChangeText={setCalories}
        placeholder="Enter calories"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.descriptionInput}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        multiline={true}
        numberOfLines={4}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    height: 120,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#DC3545',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddEntryScreen;
