import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'dimgrey',
    marginTop: 10,
  },
  mainContainer: {
    marginTop: 30,
    gap: 14,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
    color: 'dimgrey',
    fontWeight: '500',
  },
  bioText: {
    fontSize: 16,
    color: 'dimgrey',
    fontWeight: '500',
    textAlign: 'justify',
  },
});

export default styles;
