import { createDrawerNavigator } from 'react-navigation-drawer';
import sideMenuDesign from '../route/sideMenuDesign';

import Route from './Route';
import { createAppContainer } from "react-navigation"
const sideMenu = createDrawerNavigator({

  Route: {
    screen: Route

  },

}, {
  drawerWidth: 300,
  initialRouteName: 'Route',
  contentComponent: sideMenuDesign,
});

const MyApp = createAppContainer(sideMenu)
export default (MyApp);

