import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
})`
  flex: 1;
`;
