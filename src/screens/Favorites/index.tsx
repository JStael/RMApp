import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {CharacterType} from '../../api/requests.api';
import {
  Container,
  ListButton,
  ListItemImage,
  ListItemName,
  Separator,
  Title,
  WrapperTexInput,
} from './styles';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setCharacter} from '../../store';
import {filterCharacters} from '../../helpers';
import {useAppSelector} from '../../hooks';
import {TextInput} from '../../components';
import {AppTabParamList} from '../../routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<AppTabParamList, 'Favorites'>;

export function Favorites({}: ScreenProps) {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const {favoriteCharacters} = useAppSelector(
    state => state.favoriteCharacters,
  );
  const [search, setSearch] = useState('');

  const filterCharacter = filterCharacters(favoriteCharacters, search);

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

  return (
    <Container>
      <Title>Personagens favoritos</Title>
      <WrapperTexInput>
        <TextInput
          hasSearch
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar personagem favorito"
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
