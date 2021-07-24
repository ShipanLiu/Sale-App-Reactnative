/**
 * @format
 */
// for swipe not working on android
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import App from './lesson(project)/01-mosh/04-styling/App';
// import App from './lesson(project)/01-mosh/lesson3/App';
// import App from './lesson(project)/02-bottomNavibar/App';
import App from './lesson(project)/01-mosh/05-navigation(learn)/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// for swipe not working on android
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
