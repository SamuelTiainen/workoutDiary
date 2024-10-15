import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { WorkoutContext } from '../App';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from '../styles/addWorkoutStyle';

export default function AddWorkout({ navigation }) {
  const { workouts, setWorkouts, unit } = useContext(WorkoutContext);
  const [type, setType] = useState('running');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addWorkout = () => {
    if (parseFloat(distance) <= 0 || parseFloat(duration) <= 0) {
      Alert.alert('Invalid input', 'Please enter positive numbers.');
      return;
    }
    const workout = {
      type,
      distance: unit === 'miles' ? parseFloat(distance) * 1.60934 : parseFloat(distance),
      duration: parseFloat(duration),
      date,
    };
    setWorkouts([...workouts, workout]);
    setDistance('');
    setDuration('');
    setDate(new Date());
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.header}>Add Workout</Text>

      
        <View style={styles.buttonRow}>
          {['running', 'cycling', 'swimming'].map((sport) => (
            <TouchableOpacity
              key={sport}
              style={[styles.sportButton, type === sport ? styles.activeButton : styles.inactiveButton]}
              onPress={() => setType(sport)}
            >
              {sport === 'running' && <FontAwesome5 name="running" size={24} color={type === sport ? 'white' : '#6200EE'} />}
              {sport === 'cycling' && <FontAwesome name="bicycle" size={24} color={type === sport ? 'white' : '#6200EE'} />}
              {sport === 'swimming' && <FontAwesome5 name="swimmer" size={24} color={type === sport ? 'white' : '#6200EE'} />}
              <Text style={[styles.buttonText, type === sport ? styles.activeText : styles.inactiveText]}>
                {sport.charAt(0).toUpperCase() + sport.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

       
        <Text>Distance ({unit}):</Text>
        <TextInput
          keyboardType="numeric"
          value={distance}
          onChangeText={setDistance}
          style={styles.input}
        />

        
        <Text>Duration (minutes):</Text>
        <TextInput
          keyboardType="numeric"
          value={duration}
          onChangeText={setDuration}
          style={styles.input}
        />

        
        <TouchableOpacity style={styles.button} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.buttonText}>Pick Date</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        
        <TouchableOpacity style={styles.button} onPress={addWorkout}>
          <Text style={styles.buttonText}>Add Workout</Text>
        </TouchableOpacity>

        
        <View style={styles.bottomNavBar}>
          <TouchableOpacity onPress={() => navigation.navigate('Workout History')} style={styles.navButton}>
            <Text style={styles.navButtonText}>Workout History</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.navButton}>
            <Text style={styles.navButtonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}





































          

