import {CharacterType} from '../api/requests.api';

export function filterCharacters(characters: CharacterType[], name: string) {
  return characters.filter(character =>
    character.name.toLowerCase().includes(name.toLowerCase()),
  );
}
