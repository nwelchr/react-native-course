import { View, Text, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-3xl font-pblack">Aora</Text>
      <Link href="/home">Go home</Link>
    </View>
  );
}
