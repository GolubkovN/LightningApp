/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

/**
 * Mute warning at PDP Modify.
 * It can be potentially relevant but not in case when it appears right now
 */
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

AppRegistry.registerComponent(appName, () => App);
