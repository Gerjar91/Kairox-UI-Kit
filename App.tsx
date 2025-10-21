import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import HomeContainer from './src';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import ThemeProvider from './src/theme/ThemeProvider';
import { useFonts } from 'expo-font';
import { bold, extraBold, light, regular, medium, semiBold } from './src/theme/Fonts';

export default function App() {
  const [fontsLoaded] = useFonts({
    'DMSans-Bold': bold,
    'DMSans-ExtraBold': extraBold,
    'DMSans-Light': light,
    'DMSans-Regular': regular,
    'DMSans-Medium': medium,
    'DMSans-SemiBold': semiBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ThemeProvider>
      <KeyboardProvider>
        <HomeContainer />
      </KeyboardProvider>
      </ThemeProvider>
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
