import { Input, TextInput } from './styles';
import theme from 'src/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import { KeyboardTypeOptions } from 'react-native';

type IonicsNameType = keyof typeof Ionicons.glyphMap;
type FontAwesomeNameType = keyof typeof FontAwesome.glyphMap;
type FontistoNameType = keyof typeof Fontisto.glyphMap;

type Props = {
    placeholder: string
    iconName: string
    iconSize?: number
    iconType: 'Ionicons' | 'FontAwesome' | 'Fontisto'
    keyboardType?: KeyboardTypeOptions
    secureTextEntry?: boolean
    value?: string
    onChangeText?: ((text: string) => void) | undefined
}

export default function InputRegister({
    placeholder,
    iconSize = 34,
    iconName,
    iconType,
    keyboardType = 'default',
    secureTextEntry = false,
    value,
    onChangeText
}: Props) {
    return (
        <Input>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
            />
            {
                iconType === 'Ionicons'
                    ? <Ionicons name={iconName as IonicsNameType} size={iconSize} color={theme.COLORS.PRIMARY_200} />
                    : iconType === 'FontAwesome'
                        ? <FontAwesome name={iconName as FontAwesomeNameType} size={iconSize} color={theme.COLORS.PRIMARY_200} />
                        : <Fontisto name={iconName as FontistoNameType} size={iconSize} color={theme.COLORS.PRIMARY_200} />
            }
        </Input>
    )
}
