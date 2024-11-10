import React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { HomeScreen } from './screens/HomeScreen';
import { ChatScreen } from './screens/ChatScreen';
import { Button, Icon, IconButton } from 'react-native-paper';
import Logo from './logo.svg';

const Drawer = createDrawerNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerTitleStyle: {
      color: '#e00d00',
      fontWeight: 'bold',
    },
    drawerActiveTintColor: '#e6e6e6',
    drawerActiveBackgroundColor: '#d3222a',
    drawerItemStyle: {
      borderRadius: 12,
    },
    drawerInactiveTintColor: '#e6e6e6',
    headerTintColor: '#e00d00',
  },
  screens: {
    Home: HomeScreen,
    Chat: ChatScreen
  },
  drawerContent: (props) => {
    return (
      <DrawerContentScrollView {...props} style={{backgroundColor: '#282e37'}}>
        <Button icon={Logo} textColor='white' onPress={() => props.navigation.closeDrawer()}>Diligent</Button>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }
});

const Navigation = createStaticNavigation(Drawer);

function App(): React.JSX.Element {
  return (
    <Navigation />
  )
}

export default App;
