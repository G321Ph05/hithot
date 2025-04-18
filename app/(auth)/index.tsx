import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function () {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <TouchableOpacity
        className="bg-white d p-4 py-2 rounded-lg"
        onPress={() => router.push('/(tabs)')}
      >
        <Text className="text-black font-bold text-2xl">Login</Text>
      </TouchableOpacity>
    </View>
  );
}