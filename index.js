/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

import App from './App';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
