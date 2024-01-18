import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.spacings.s20}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: ${({theme}) => theme.colors.black};
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 800;
  color: ${({theme}) => theme.colors.black};
  margin-top: ${({theme}) => theme.spacings.s20}px;
`;

export const ListButton = styled.TouchableOpacity`
  padding: ${({theme}) => theme.spacings.s8}px;
  flex-direction: row;
  justify-content: 'center';
`;

export const ListItemImage = styled.Image`
  margin-right: ${({theme}) => theme.spacings.s8}px;
  width: 50px;
  height: 50px;
  border-radius: ${({theme}) => theme.radius.r4}px;
`;

export const ListItemName = styled.Text`
  color: ${({theme}) => theme.colors.black};
`;

export const Separator = styled.View`
  background-color: ${({theme}) => theme.colors.gray1};
  height: 1px;
`;
