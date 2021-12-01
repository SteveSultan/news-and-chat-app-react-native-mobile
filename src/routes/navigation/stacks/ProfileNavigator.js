import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ColorSchemeContext } from '../../../context/ColorSchemeContext'
import { lightProps, darkProps } from './navigationProps/navigationProps'
import HeaderStyle from './headerComponents/HeaderStyle'

import Profile from '../../../scenes/profile'
import Edit from '../../../scenes/edit'
import Post from '../../../scenes/post'

const Stack = createStackNavigator()
const RootStack = createStackNavigator()

export const ProfileNavigator = () => {
  const { scheme } = useContext(ColorSchemeContext)
  const navigationProps = scheme === 'dark' ? darkProps:lightProps
  return (
    <Stack.Navigator screenOptions={navigationProps}>
      <RootStack.Group>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            headerBackground: scheme === 'dark' ? null: () => <HeaderStyle />,
          })}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={({ navigation }) => ({
            headerBackground: scheme === 'dark' ? null: () => <HeaderStyle />,
          })}
        />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false
        }}>
        <RootStack.Screen
          name="Post"
          component={Post}
        />
      </RootStack.Group>
    </Stack.Navigator>
  )
}