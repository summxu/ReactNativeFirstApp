import { AppRegistry } from 'react-native';
import App from './js/App';
import AppNavigators from './js/navigator/AppNavigators';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
