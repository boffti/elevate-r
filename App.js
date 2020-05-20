import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Floor from './src/screens/Floor';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Elevator: Floor
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Elevate-R"
    }
  }
);

export default createAppContainer(navigator);
