import {useNavigation} from "@react-navigation/native";
import {Assay} from "../../../types/Assay";
import * as Animatable from "react-native-animatable";
import {ListItem, Text} from "react-native-ui-lib";
import {AssayListScreenStyleSheet} from "./AssayListScreenStyleSheet";
import {FlatList} from "react-native";
import data from "../../../assays.json";
import React from "react";

export const AssayListScreen = () => {
  const navigation = useNavigation();

  const onPress = (assay: Assay) => {
    navigation.navigate("Camera", assay);
  }

  const renderItem = ({item}: { item: Assay }) => {
    return (
      <Animatable.View>
        <ListItem containerStyle={[AssayListScreenStyleSheet.border]} onPress={() => onPress(item)}>
          <ListItem.Part containerStyle={[AssayListScreenStyleSheet.part]}>
            <Text>{item.name}</Text>
          </ListItem.Part>
        </ListItem>
      </Animatable.View>
    )
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item: Assay) => item.id}
      renderItem={renderItem}
    />
  );
}
