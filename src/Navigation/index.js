import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Notifications from '../pages/Notifications';
import Dados from '../pages/Dados';

const Routes = createStackNavigator({
    Home: Welcome,
    Login: Login,
    Menu: Menu,
    Notifications: Notifications,
    Dados: Dados,
},{
    initialRouteName: "Login",
    // defaultNavigationOptions: {
    //     header: null
    // }
});

export default createAppContainer(Routes);

