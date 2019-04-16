import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/screens/Main';
import Podcast from '~/screens/Podcast';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Podcast,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default Routes;
