import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 400,
  fade: true,
});

export default function App() {

  const uri = process.env.EXPO_PUBLIC_DASHBOARD as string;

  if (!uri) return null;

  return (
    <>
      <StatusBar hidden />
      <WebView
        style={styles.container}
        source={{ uri }}
        onLoadEnd={() => SplashScreen.hide()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
