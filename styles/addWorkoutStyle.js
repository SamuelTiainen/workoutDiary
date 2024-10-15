import { StyleSheet } from 'react-native';

const addWorkoutStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#6200EE',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sportButton: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    width: '32%',  // Increased width for more space
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#6200EE',
    borderColor: '#6200EE',
  },
  inactiveButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#6200EE',
  },
  buttonText: {
    fontSize: 14, // Reduced font size to fit longer words
    fontWeight: 'bold',
    marginLeft: 8,
  },
  activeText: {
    color: '#FFFFFF',
  },
  inactiveText: {
    color: '#6200EE',
  },
  input: {
    borderWidth: 1,
    borderColor: '#6200EE',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#6200EE',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
  navButton: {
    alignItems: 'center',
    flex: 1,
  },
  navButtonText: {
    color: '#6200EE',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default addWorkoutStyle;








