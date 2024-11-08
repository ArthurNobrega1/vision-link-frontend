import { DescriptionInput, Input, TextInput } from './styles';
import { KeyboardTypeOptions } from 'react-native';

type Props = {
    placeholder: string
    description: string
    keyboardType?: KeyboardTypeOptions
    secureTextEntry?: boolean
    value?: string
    onChangeText?: ((text: string) => void) | undefined
}

export default function InputLogin({
    placeholder,
    description,
    keyboardType = 'default',
    secureTextEntry = false,
    value,
    onChangeText
}: Props) {
    return (
        <Input>
            <DescriptionInput>
                {description}
            </DescriptionInput>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
            />
        </Input>
    )
}
