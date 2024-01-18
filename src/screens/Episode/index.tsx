import React, {useCallback, useEffect, useState} from 'react';
import {
  Container,
  ListButton,
  ListItemImage,
  ListItemName,
  Separator,
  Subtitle,
  Title,
} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../routes';
import {CharacterType, EpisodeType, RequestApi} from '../../api';
import {Loading} from '../../components';
import {getCharacterId} from '../../helpers';
import {FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setCharacter} from '../../store';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Episode'>;

export function Episode({route}: ScreenProps) {
  const {episode} = route.params;
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [selectedEpisode, setSelectedEpisode] = useState({} as EpisodeType);
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  function getCharactersId(data: string[]) {
    return data.map(item => getCharacterId(item));
  }

  const getEpisode = useCallback(async () => {
    try {
      const {data} = await RequestApi.getEpisodes(episode);
      setSelectedEpisode(data);
      const charactersId = getCharactersId(data.characters);
      const charactersData = await RequestApi.getMultipleCharacters(
        charactersId,
      );
      setCharacters(charactersData.data);
    } catch {
    } finally {
      setLoading(false);
    }
  }, [episode]);

  function handleCharacter(character: CharacterType) {
    dispatch(setCharacter(character));
    navigate('CharacterDetails');
  }

  function renderItem({item}: {item: CharacterType}) {
    return (
      <ListButton onPress={() => handleCharacter(item)}>
        <ListItemImage source={{uri: item.image}} />
        <ListItemName>{item.name}</ListItemName>
      </ListButton>
    );
  }

  useEffect(() => {
    getEpisode();
  }, [getEpisode]);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Title>
        E{selectedEpisode.id} {selectedEpisode.name}
      </Title>
      <Subtitle>Elenco:</Subtitle>
      <FlatList
        data={characters}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Separator />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
