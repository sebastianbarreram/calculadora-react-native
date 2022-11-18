import { StyleSheet, Dimensions } from 'react-native';
const buttonMargin = 2;
const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4 - buttonMargin * 2 - 11;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputContainer: {
    flex: 2.3,
    padding: 5,
  },
  resultText: {
    top: 100,
    right: 10,
    fontSize: 70,
    position: 'absolute',
    color: 'white',
  },
  inputText: {
    top: 30,
    right: 10,
    fontSize: 50,
    position: 'absolute',
    color: '#7c7c7c',
  },
  dobleButton: { width: buttonWidth * 2 + buttonMargin * 2 },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 12,
  },
  button: {
    width: buttonWidth,
    height: buttonWidth,
    borderRadius: 100,
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    margin: buttonMargin,
  },
  blackText: {
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
