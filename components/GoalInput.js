import { Button, StyleSheet, Text, TextInput, View, Modal ,Image } from "react-native";
import React, { useState } from "react";
import goal from "../assets/goal.png"
const GoalInput = (props) => {
  const [text, settext] = useState("");
  const sendText = () => {
    props.fText(text);
    settext("");
  };
  return (
    <Modal visible={props.View} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={goal} style={styles.image}/>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={settext}
          value={text}
        />
        <View style={styles.buttonContiner}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={()=> props.exsit(false)} color="#f31282"/>
          </View>
          <View style={styles.button}>
            <Button title="Add Gold" onPress={() => sendText()} color="#b180f0"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding:16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    color: "#120438",
    borderRadius:6,
    width: "100%",
    padding: 16,

  },
  buttonContiner: {
    marginTop:16,
    flexDirection: "row",
  },
  button:{
    width: 100,
    marginHorizontal: 8
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
});
