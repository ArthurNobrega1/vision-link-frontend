import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 96%;
`;

export const NameElement = styled.Text`
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({theme}) => theme.COLORS.SECONDARY_200};
    width: 220px;;
    padding: 5px 0;
    border-radius: 20px;
    background-color: ${({theme}) => theme.COLORS.PRIMARY_200};
`;

export const IconContainer = styled.View`
    background-color: ${({theme}) => theme.COLORS.PRIMARY_200};
    padding: 20px;
    border-radius: 100px;
`;
