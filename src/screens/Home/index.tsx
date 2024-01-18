import React, {useEffect, useState} from 'react';
import {Loading, TextInput} from '../../components';
import {
  Container,
  ListButton,
  ListItemImage,
  ListItemName,
  Separator,
  Title,
  WrapperTexInput,
} from './styles';
import {CharacterType, RequestApi} from '../../api/requests.api';
import {FlatList} from 'react-native';
import {setCharacter} from '../../store/characterSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {filterCharacters} from '../../helpers';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppTabParamList} from '../../routes';

type ScreenProps = NativeStackScreenProps<AppTabParamList, 'Home'>;

export function Home({}: ScreenProps) {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [search, setSearch] = useState('');

  async function getCharacters() {
    try {
      const {data} = await RequestApi.getCharacters();
      setCharacters(data.results);
    } catch {
    } finally {
      setLoading(false);
    }
  }

  const filterCharacter = filterCharacters(characters, search);

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
    getCharacters();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Title>Personagens</Title>
      <WrapperTexInput>
        <TextInput
          hasSearch
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar personagem"
        />
      </WrapperTexInput>
      <FlatList
        data={filterCharacter}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Separator />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
