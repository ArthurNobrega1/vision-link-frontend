import { RouteProp } from '@react-navigation/native';

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            login: undefined
            register: undefined
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
