import { StyleSheet } from 'react-native';

const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#6200EE',
  },
  unitOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  unitButton: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#6200EE',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  activeUnit: {
    backgroundColor: '#6200EE',
  },
  unitButtonText: {
    fontSize: 16,
    color: '#6200EE',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  activeText: {
    color: '#FFFFFF',
  },
  radioMark: {
    color: '#6200EE',
    fontSize: 18,
    marginLeft: 5,
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

export default settingsStyles;
