import React from 'react';
import {
  TextInputProps as RNTextInputProps,
  ViewProps as RNViewProps,
} from 'react-native';
import {Container, RNTextInput} from './styles';
import {SearchIcon} from '../../assets';
import colors from '../../theme/colors';

interface TextInputProps extends RNTextInputProps {
  hasSearch?: boolean;
  viewProps?: RNViewProps;
}

export function TextInput({hasSearch, viewProps, ...rest}: TextInputProps) {
  return (
    <Container {...viewProps}>
      <RNTextInput {...rest} />
      {hasSearch && <SearchIcon color={colors.gray3} />}
    </Container>
  );
}
