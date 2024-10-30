import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
import Settings from "@screens/Settings";
import Devices from "@screens/Devices";
import PersonalData from "@screens/PersonalData";
import General from "@screens/General";
import Account from "@screens/Account";
import Security from "@screens/Security";
import Privacy from "@screens/Privacy";

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="settings"
                component={Settings}
            />
            <Screen
                name="devices"
                component={Devices}
            />
            <Screen
                name="personalData"
                component={PersonalData}
            />
            <Screen
                name="general"
                component={General}
            />
            <Screen
                name="account"
                component={Account}
            />
            <Screen
                name="security"
                component={Security}
            />
            <Screen
                name="privacy"
                component={Privacy}
            />
        </Navigator>
    )
}