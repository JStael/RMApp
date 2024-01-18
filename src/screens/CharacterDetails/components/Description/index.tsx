import React from 'react';
import {DescriptionBold, DescriptionBox, DescriptionText} from './styles';

interface DescriptionProps {
  keyValue: string;
  value: string;
  italic?: boolean;
}

export function Description({keyValue, value, italic}: DescriptionProps) {
  return (
    <DescriptionBox>
      <DescriptionText>{keyValue}: </DescriptionText>
      <DescriptionBold italic={italic}>{value}</DescriptionBold>
    </DescriptionBox>
  );
}
