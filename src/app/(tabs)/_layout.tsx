import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="race"
        options={{
          title: 'Race',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="car-traction-control"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tabs.Screen
        name="podium"
        options={{
          title: 'Podium',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="podium" color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="runs"
        options={{
          title: 'Runs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="garage"
        options={{
          title: 'Garage',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="garage" color={color} size={size} />
          )
        }}
      />
    </Tabs>
  )
}

export default TabLayout
