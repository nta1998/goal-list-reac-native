import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItems = (props) => {
  return (
    <Pressable onPress={props.delMe.bind(this, props.text.id)} style={({pressed})=> pressed && styles.pressedItem}>
      <View style={styles.goalitem}>
        <Text style={styles.goaldText}>{props.text.Text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItems;

const styles = StyleSheet.create({
  goalitem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem:{
    opacity:0.5
  },
  goaldText: {
    color: "white",
  },
});
