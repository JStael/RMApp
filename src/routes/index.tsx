import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Favorites, Home} from '../screens';
import {HeartIcon, PokeIcon, PokeTitle} from '../assets';
import theme from '../theme';

type AppTabParamList = {
  Home: undefined;
  Favorites: undefined;
};

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabParamList>;
  PokemonDetails: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();
const Stack = createNativeStackNavigator<AppStackParamList>();

interface Props {
  initialRouteName?: keyof AppStackParamList;
}

export const AppTabNavigator = () => {
  const {colors} = theme;
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: () => <PokeTitle />,
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Pokemons',
          tabBarIcon: ({focused}) => (
            <PokeIcon color={focused ? colors.primary : colors.gray3} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favoritos',
          tabBarIcon: ({focused}) => (
            <HeartIcon color={focused ? colors.primary : colors.gray3} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export function AppStack({initialRouteName = 'AppTabNavigator'}: Props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          fullScreenGestureEnabled: true,
        }}
        initialRouteName={initialRouteName}>
        <Stack.Screen
          name="AppTabNavigator"
          component={AppTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
