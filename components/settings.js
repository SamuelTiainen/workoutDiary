import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WorkoutContext } from '../App';
import settingsStyles from '../styles/settingsStyle';

export default function Settings({ navigation }) {
  const { unit, setUnit } = useContext(WorkoutContext);

  return (
    <View style={settingsStyles.container}>
      <Text style={settingsStyles.header}>Settings</Text>

      
      <View style={settingsStyles.unitOptions}>
        <TouchableOpacity
          onPress={() => setUnit('kilometers')}
          style={[
            settingsStyles.unitButton,
            unit === 'kilometers' && settingsStyles.activeUnit,
          ]}
        >
          <Text
            style={[
              settingsStyles.unitButtonText,
              unit === 'kilometers' && settingsStyles.activeText,
            ]}
          >
            Kilometers
          </Text>
          {unit === 'kilometers' && (
            <Text style={settingsStyles.radioMark}> ●</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setUnit('miles')}
          style={[
            settingsStyles.unitButton,
            unit === 'miles' && settingsStyles.activeUnit,
          ]}
        >
          <Text
            style={[
              settingsStyles.unitButtonText,
              unit === 'miles' && settingsStyles.activeText,
            ]}
          >
            Miles
          </Text>
          {unit === 'miles' && (
            <Text style={settingsStyles.radioMark}> ●</Text>
          )}
        </TouchableOpacity>
      </View>

      
      <View style={settingsStyles.bottomNavBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Workout History')}
          style={settingsStyles.navButton}
        >
          <Text style={settingsStyles.navButtonText}>Workout History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Add workout')}
          style={settingsStyles.navButton}
        >
          <Text style={settingsStyles.navButtonText}>Add Workout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}







