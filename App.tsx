/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const crashApp = () => {
    console.log('My new change');
    console.log('Now I am going to crash the app');
    // Crashes.generateTestCrash();
    // throw new Error('Simple Error Test');
  };

  const sendEvent = () => {
    console.log('Sending Event ....');
    Analytics.trackEvent('New Event');
  };
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Button title="Crash App" onPress={crashApp} />
      <Button title="Send Event" onPress={sendEvent} />
    </SafeAreaView>
  );
}

export default App;
