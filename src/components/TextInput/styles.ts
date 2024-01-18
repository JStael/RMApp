import styled from 'styled-components/native';

export const Container = styled.Pressable`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.gray2};
  background-color: ${({theme}) => theme.colors.background};
  border-radius: ${({theme}) => theme.radius.r8}px;
  height: 50px;
  width: 100%;
  padding: 0 ${({theme}) => theme.spacings.s8}px;
`;

export const RNTextInput = styled.TextInput`
  flex-grow: 1;
  flex-shrink: 1;
  color: ${({theme}) => theme.colors.black};
`;
