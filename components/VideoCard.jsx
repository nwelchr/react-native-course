import { View, Text, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "@/constants";
import { TouchableOpacity } from "react-native";

import { Video, ResizeMode } from "expo-av";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex-col items-center px-4 mb-14 w-full">
      <View className="flex-row justify-between w-full gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] border border-secondary justify-center items-center p-0.5 rounded-lg">
            <Image
              source={{ uri: avatar }}
              className="rounded-lg"
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-gray-100 font-pregular text-xs"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image
            source={icons.menu}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        </View>
      </View>

      {play ? (
        <Video
          style={{
            width: "100%",
            height: 240,
            borderRadius: 36,
          }}
          source={{ uri: video }}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <Image
            source={{ uri: thumbnail }}
            className="rounded-xl mt-3"
            style={{ height: 240, width: "100%" }}
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            style={{ height: 48, width: 48 }}
            className="absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
