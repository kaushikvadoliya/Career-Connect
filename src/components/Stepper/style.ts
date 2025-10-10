import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: '700',
  },
  image: {
    height: 40,
    width: 40,
    gap: 10,
  },
  button: {
    flex: 1,
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginTop: 30,
  },
  activeButton: {
    backgroundColor: '#1e90ff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 10,
    justifyContent: 'center',
  },
  inActiveButton: {
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  mainButtonContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
  },
  mainContainer: {
    flex: 1,
  },
});

export default styles;
