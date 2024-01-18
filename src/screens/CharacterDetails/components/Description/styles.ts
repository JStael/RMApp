import styled from 'styled-components/native';

type DescriptionProps = {
  italic?: boolean;
};

export const DescriptionBox = styled.View`
  flex-direction: row;
`;

export const DescriptionText = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: 16px;
`;

export const DescriptionBold = styled(DescriptionText)<DescriptionProps>`
  font-weight: 800;
  font-style: ${({italic}) => (italic ? 'italic' : 'normal')};
`;
