import { SelectList } from "react-native-dropdown-select-list";
import styled from "styled-components/native";
import Feather from '@expo/vector-icons/Feather';
import Switch from '@samcode/react-native-switch';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`

export const Header = styled.View.attrs({
    accessibilityLabel: "Geral!"
})`
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 70%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    border-radius: 20px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    text-transform: uppercase;
`

export const Main = styled.View`
    align-items: center;
    gap: 40px;
`

export const NameElement = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
    padding: 5px 30px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    text-transform: uppercase;
`

export const Language = styled.View.attrs({
    accessibilityLabel: "Campo de Idioma!"
})`
    align-items: center;
    gap: 20px;
`

export const Select = styled(SelectList).attrs(({ theme }) => ({
    boxStyles: {
        width: '65%',
        backgroundColor: theme.COLORS.PRIMARY_200,
    },
    inputStyles: {
        color: theme.COLORS.SECONDARY_200,
        fontSize: theme.FONT_SIZE.SM
    },
    dropdownTextStyles: {
        color: theme.COLORS.SECONDARY_200,
        textAlign: 'center',
    },
    dropdownStyles: {
        backgroundColor: theme.COLORS.PRIMARY_200,
    }
}))``

export const Notifications = styled.View.attrs({
    accessibilityLabel: "Campo de Notificações!"
})`
    align-items: center;
    gap: 20px;
`

export const Arrow = styled(Feather).attrs(({ theme }) => ({
    name: 'chevron-down',
    size: theme.FONT_SIZE.MD,
    color: theme.COLORS.SECONDARY_200
}))``

export const CustomSwitch = styled(Switch).attrs(({ theme }) => ({
    trackColor: {
        true: theme.COLORS.PRIMARY_200,
        false: theme.COLORS.PRIMARY_200
    },
    thumbColor: {
        true: theme.COLORS.PRIMARY_100,
        false: theme.COLORS.PRIMARY_300,
    },
    icons: {
        false: {
            iconType: 'Ionicons',
            name: 'notifications-off-outline',
            size: 19,
            color: theme.COLORS.SECONDARY_200
        },
        true: {
            iconType: 'MaterialIcons',
            name: 'notifications-on',
            size: 19,
            color: theme.COLORS.SECONDARY_200
        }
    }
}))``

export const Buddy = styled.Image.attrs({
    accessibilityLabel: "Vision Buddy!"
})`
    height: 230px;
    width: 150px;
`