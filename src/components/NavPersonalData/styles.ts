import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 96%;
`;

export const NameElement = styled.Text`
    text-align: center;
    text-transform: uppercase;
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({theme}) => theme.COLORS.PRIMARY_200};
    width: 250px;;
    padding: 5px 0;
    border-radius: 20px;
    background-color: ${({theme}) => theme.COLORS.SECONDARY_200};
`;