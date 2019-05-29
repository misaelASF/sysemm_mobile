import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Notifications from '../pages/Notifications';
import Dados from '../pages/Dados';
import Boletim from '../pages/Boletim';

const Routes = createStackNavigator({
    Login: Login,
    Menu: Menu,
    Notifications: Notifications,
    Dados: Dados,
    Boletim: Boletim
},{
    initialRouteName: "Login",
    // defaultNavigationOptions: {
    //     header: null
    // }
});

export default createAppContainer(Routes);

