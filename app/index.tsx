import { View, Text, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-emerald-700">Hello! Go to profile:</Text>
      <Link href="/profile">Go to profile!!!</Link>
      <Button title="Go to Profile" onPress={() => router.push("/profile")} />
    </View>
  );
}
