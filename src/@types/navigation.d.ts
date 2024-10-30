import { RouteProp } from '@react-navigation/native';

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined
            settings: undefined
            devices: undefined
            personalData: undefined
            general: undefined
            account: undefined
            security: undefined
            privacy: undefined
        }
    }
}
