import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";

export default function App() {
  const [list, setlist] = useState([]);
  const [viewModel, setviewModel] = useState(false)
  const click = (text) => {
    setlist([...list, {Text: text , id : Math.random().toString()}]);
    setviewModel(false)
  };

  const del=(id)=>{
    setlist(list.filter((item)=> item.id !== id))
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color={"#a065ec"} onPress={()=>setviewModel(true)}/>
      <GoalInput fText={click} View={viewModel} exsit={setviewModel}/>
      <View style={styles.goalsContiner}>
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return <GoalItems text={itemData.item} delMe={del}/>
          }}
          keyExtractor={(item,index)=> {
            return item.id
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    
  },
  goalsContiner: {
    flex: 5,
  },

});
