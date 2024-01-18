import styled from 'styled-components/native';
import {HeartIcon} from '../../assets';

export const Container = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.spacings.s20}px;
`;

export const ImageBox = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme}) => theme.spacings.s16}px;
`;

export const FavoriteButton = styled.Pressable`
  position: absolute;
  right: ${({theme}) => theme.spacings.s20}px;
  bottom: ${({theme}) => theme.spacings.s20}px;
`;

export const Icon = styled(HeartIcon)``;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: ${({theme}) => theme.radius.r8}px;
`;

export const DescritionContainer = styled.View`
  gap: ${({theme}) => theme.spacings.s8}px;
`;

export const EpisodesBox = styled.View``;

export const EpisodeLabel = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: 16px;
`;

export const EspisodeItem = styled.TouchableOpacity`
  padding: ${({theme}) => theme.spacings.s16}px;
`;

export const EspisodeText = styled.Text`
  color: ${({theme}) => theme.colors.black};
`;

export const Separator = styled.View`
  background-color: ${({theme}) => theme.colors.gray1};
  height: 1px;
`;
