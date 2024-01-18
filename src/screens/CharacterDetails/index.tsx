import React, {useCallback, useEffect, useState} from 'react';
import {
  Container,
  DescritionContainer,
  EpisodeLabel,
  EpisodesBox,
  EspisodeItem,
  EspisodeText,
  FavoriteButton,
  Icon,
  Image,
  ImageBox,
  Separator,
} from './styles';
import {useAppSelector} from '../../hooks';
import {CharacterType} from '../../api/requests.api';
import {Description} from './components/Description';
import {FlatList} from 'react-native';
import {getEpisodeNumber} from '../../helpers';
import {useDispatch} from 'react-redux';
import {removeFavoriteCharacter, setFavoriteCharacter} from '../../store';
import colors from '../../theme/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../routes';
import {useNavigation} from '@react-navigation/native';

type ScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'CharacterDetails'
>;

export function CharacterDetails({}: ScreenProps) {
  const dispatch = useDispatch();
  const character: CharacterType = useAppSelector(
    state => state.character.character,
  );
  const favoriteCharacters: CharacterType[] = useAppSelector(
    state => state.favoriteCharacters.favoriteCharacters,
  );
  const {navigate} = useNavigation();

  const [isFavorite, setIsFavorite] = useState(false);

  function renderItem({item}: {item: string}) {
    const episodeNumber = getEpisodeNumber(item);
    return (
      <EspisodeItem
        onPress={() => navigate('Episode', {episode: episodeNumber})}>
        <EspisodeText> Episódio: {episodeNumber}</EspisodeText>
      </EspisodeItem>
    );
  }

  function handleFavoriteCharacter() {
    const isFavoriteCharacter = favoriteCharacters.some(
      favoriteCharacter => favoriteCharacter.id === character.id,
    );

    if (isFavoriteCharacter) {
      dispatch(removeFavoriteCharacter(character));
      return setIsFavorite(false);
    }
    dispatch(setFavoriteCharacter(character));
    setIsFavorite(true);
  }

  const checkFavoriteCharacter = useCallback(() => {
    const isFavoriteCharacter = favoriteCharacters.some(
      favoriteCharacter => favoriteCharacter.id === character.id,
    );

    setIsFavorite(isFavoriteCharacter);
  }, [character.id, favoriteCharacters]);

  useEffect(() => {
    checkFavoriteCharacter();
  }, [checkFavoriteCharacter]);

  return (
    <Container>
      <ImageBox>
        <Image source={{uri: character.image}} />
        <FavoriteButton onPress={handleFavoriteCharacter}>
          <Icon color={isFavorite ? colors.primary : colors.gray3} />
        </FavoriteButton>
      </ImageBox>
      <DescritionContainer>
        <Description keyValue="Nome do Personagem" value={character.name} />
        <Description
          keyValue="Vivo"
          value={character?.status === 'Alive' ? 'Sim' : 'Não'}
        />
        <Description keyValue="Espécie" value={character?.species} italic />
        <Description
          keyValue="Gênero"
          value={character?.gender === 'Male' ? 'Masculino' : 'Feminino'}
        />
        <Description
          keyValue="Localização"
          value={character?.location?.name}
          italic
        />
        <EpisodesBox>
          <EpisodeLabel>Episódios:</EpisodeLabel>
          <FlatList
            data={character?.episode}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <Separator />}
            showsVerticalScrollIndicator={false}
          />
        </EpisodesBox>
      </DescritionContainer>
    </Container>
  );
}
