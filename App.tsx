import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeContainer from './src';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default function App() {
  return (
    <View style={styles.container}>
      <KeyboardProvider>
        <HomeContainer />
      </KeyboardProvider>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
