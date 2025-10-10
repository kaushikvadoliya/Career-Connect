import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  circle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#1e90ff',
  },
  circleBorder: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 16,
    fontWeight: '500',
  },
  mainContainer: { paddingTop: 20, paddingHorizontal: 20 },
  error: {
    color: 'red',
  },
});

export default styles;
