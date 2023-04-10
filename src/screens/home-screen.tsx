/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import LottieView from "lottie-react-native"
import { useNavigation } from '@react-navigation/native';

const database = new Array(200).fill(0);

type RenderItemProps = {
  item: number;
  index: number;
}

export const HomeScreen = () => {

  const { navigate } = useNavigation();

  const renderItem = ({item,index}:RenderItemProps) => (
    <TouchableOpacity>
      <View style={[styles.itemContainer]}>
        <View
          style={{
            width: 8,
            height: "100%",
            backgroundColor: "#e69a36"
          }}
        />
        <Text style={styles.itemContainerText}>item {index}</Text>
      </View>
    </TouchableOpacity>

  )

  return(
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        resizeMode='contain'
        style={{
          height: 360,
          width: 360,
        }}
        source={require("../animations/chat-bot.json")}
      />
      <Button
        title="list-screen"
        onPress={() => navigate("List")}
      />
    </View>
  )
}


const  styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#000000",
    paddingVertical: 12,
  },
  itemContainer:{
    height: 41,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#222222",
    marginVertical: 7,
  },
  itemContainerText:{
    fontWeight: "500",
    color: "#ffffff",
    marginLeft: 12,
  },
})