import React from 'react';
import {Svg, Path} from 'react-native-svg';

interface IconProps {
  color?: string;
  size?: number;
}

export function HeartIcon({color = 'black', size = 24}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.5349 4.50292C20.0707 4.02645 19.5195 3.64848 18.9128 3.39061C18.3061 3.13273 17.6558 3 16.9991 3C16.3424 3 15.6921 3.13273 15.0854 3.39061C14.4787 3.64848 13.9275 4.02645 13.4633 4.50292L12.4998 5.4913L11.5363 4.50292C10.5985 3.54094 9.32662 3.0005 8.00043 3.0005C6.67423 3.0005 5.40235 3.54094 4.46459 4.50292C3.52683 5.46491 3 6.76964 3 8.1301C3 9.49055 3.52683 10.7953 4.46459 11.7573L5.42808 12.7457L12.4998 20L19.5714 12.7457L20.5349 11.7573C20.9994 11.281 21.3678 10.7156 21.6192 10.0932C21.8706 9.47084 22 8.80377 22 8.1301C22 7.45642 21.8706 6.78935 21.6192 6.16699C21.3678 5.54463 20.9994 4.97917 20.5349 4.50292Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
