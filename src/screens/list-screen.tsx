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
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const database = new Array(200).fill(0);

type RenderItemProps = {
  item: number;
  index: number;
}

export const ListScreen = () => {

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
       <Button
        title="list-screen"
        onPress={() => navigate("Home")}
      />
      <FlatList
        data={database}
        scrollEnabled
        renderItem={renderItem}
        keyExtractor={(_,index) => `${index}`}
        style={{
          flex: 1,
        }}
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