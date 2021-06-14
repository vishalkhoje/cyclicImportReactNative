/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AutoTrackables from '@lerna-react-native/react-native-pkg';

const App = () => {
  const [autoTrackablesInstance] = useState(new AutoTrackables());
  const handleTrackData = (context: any) => {
    autoTrackablesInstance.report(context);
    console.log('autoTrackablesInstance', autoTrackablesInstance);
  };

  console.log('hereeee', handleTrackData('userAgent'));
  console.log('screenSize:', handleTrackData('screenSize'));
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Track UserAgent"
            onPress={() => handleTrackData('userAgent')}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Track ScreenSize"
            onPress={() => handleTrackData('screenSize')}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Track Coordinates"
            onPress={() => handleTrackData('coordinates')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    borderRadius: 10,
  },
});

export default App;
