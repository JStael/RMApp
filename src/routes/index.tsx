import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Favorites, Home, CharacterDetails, Episode} from '../screens';
import {HeartIcon, Logo, RickAndMortyIcon} from '../assets';
import theme from '../theme';

export type AppTabParamList = {
  Home: undefined;
  Favorites: undefined;
};

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabParamList>;
  CharacterDetails: undefined;
  Episode: {episode: string};
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
        headerTitle: () => <Logo />,
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Pokemons',
          tabBarIcon: ({focused}) => (
            <RickAndMortyIcon color={focused ? colors.primary : colors.gray3} />
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
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetails}
          options={{title: 'Personagem', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Episode"
          component={Episode}
          options={{title: 'Episódio', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
