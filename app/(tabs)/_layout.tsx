import { Tabs } from 'expo-router';
import { Text } from 'react-native';

//this library for the picture 
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black"/>,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          tabBarIcon: () => <FontAwesome5 name="user-friends" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: 'Camera',
          tabBarIcon: () => <FontAwesome name="camera" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          tabBarIcon: () => <FontAwesome name="inbox" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => <AntDesign name="profile" size={24} color="black" />,
        }}
      />

    </Tabs>
  );
}
