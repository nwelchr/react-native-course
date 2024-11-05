import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { icons } from "../constants";
import { usePathname, router } from "expo-router";

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery);

  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder={"Search for a video topic"}
        placeholderTextColor="#cdcde0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );
          }
          if (pathname.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
          source={icons.search}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
