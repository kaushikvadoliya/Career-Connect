import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    marginHorizontal: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 26,
  },
  text: {
    fontSize: 16,
  },
  flatlistStyle: {
    gap: 10,
  },
});

export default styles;
