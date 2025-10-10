import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  checkBoxtext: {
    fontSize: 16,
  },
  box: {
    height: 12,
    width: 12,
    backgroundColor: '#1e90ff',
    borderRadius: 2,
  },
  boxBorder: {
    height: 24,
    width: 24,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkBoxContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 16,
    fontWeight: '500',
  },
  error: {
    color: 'red',
  },
});

export default styles;
