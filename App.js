import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import addWorkout from './components/addWorkout';
import workoutHistory from './components/workoutHistory';
import settings from './components/settings';

const Stack = createStackNavigator();
export const WorkoutContext = createContext();

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [unit, setUnit] = useState('km');

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts, unit, setUnit }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Add workout" component={addWorkout} />
          <Stack.Screen name="Workout History" component={workoutHistory} />
          <Stack.Screen name="Settings" component={settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </WorkoutContext.Provider>
  );
}

