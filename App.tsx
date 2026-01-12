import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 400,
  fade: true,
});

export default function App() {

  return (
    <>
      <StatusBar hidden />
      <WebView
        style={styles.container}
        source={{ uri: 'https://app2.skychart.com.br/portal-transit-83284/' }}
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
