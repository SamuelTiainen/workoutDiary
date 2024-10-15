import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { WorkoutContext } from '../App';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import workoutHistoryStyles from '../styles/workoutHistoryStyle';

export default function WorkoutHistory() {
  const { workouts, unit } = useContext(WorkoutContext);

  
  const totals = workouts.reduce((acc, workout) => {
    acc[workout.type] = (acc[workout.type] || 0) + workout.distance;
    return acc;
  }, {});

  const totalRunning = totals['running'] || 0;
  const totalCycling = totals['cycling'] || 0;
  const totalSwimming = totals['swimming'] || 0;

  const renderWorkout = ({ item }) => (
    <View style={workoutHistoryStyles.workoutItem}>
      <View style={workoutHistoryStyles.iconContainer}>
        {item.type === 'running' && <FontAwesome5 name="running" size={24} color="#6200EE" />}
        {item.type === 'cycling' && <FontAwesome name="bicycle" size={24} color="#6200EE" />}
        {item.type === 'swimming' && <FontAwesome5 name="swimmer" size={24} color="#6200EE" />}
        <Text style={workoutHistoryStyles.dateText}>{item.date.toDateString()}</Text>
      </View>
      <Text>Distance: {item.distance.toFixed(2)} {unit}</Text>
      <Text>Duration: {item.duration} minutes</Text>
    </View>
  );

  return (
    <View style={workoutHistoryStyles.container}>
      <Text style={workoutHistoryStyles.header}>List of Workouts</Text>

      <View style={workoutHistoryStyles.sumsContainer}>
        <View style={workoutHistoryStyles.sumRow}>
          <FontAwesome5 name="running" size={24} color="#6200EE" />
          <Text style={workoutHistoryStyles.sumText}>
            {totalRunning.toFixed(2)} {unit === 'kilometers' ? 'km' : 'mi'}
          </Text>
        </View>
        <View style={workoutHistoryStyles.sumRow}>
          <FontAwesome name="bicycle" size={24} color="#6200EE" />
          <Text style={workoutHistoryStyles.sumText}>
            {totalCycling.toFixed(2)} {unit === 'kilometers' ? 'km' : 'mi'}
          </Text>
        </View>
        <View style={workoutHistoryStyles.sumRow}>
          <FontAwesome5 name="swimmer" size={24} color="#6200EE" />
          <Text style={workoutHistoryStyles.sumText}>
            {totalSwimming.toFixed(2)} {unit === 'kilometers' ? 'km' : 'mi'}
          </Text>
        </View>
      </View>

      <FlatList
        data={workouts}
        renderItem={renderWorkout}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}








   











 







