import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function crossOut(e) {
    e.target.style.textDecoration = "line-through";
    e.target.style.textDecorationColor = "red";
  }

  function clearList() {
    setList([]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>To Do List</Text>
      <TextInput
        style={styles.input}
        onChangeText={(txt) => {
          setTask(txt);
        }}
        placeholder="Enter a task to add!"
      />
      <View style={styles.buttonRow}>
        <Button
          style={styles.buttonAdd}
          title="Add"
          onPress={() => {
            setList([...list, task]);
          }}
        />
        <Button onPress={clearList} title="clear"></Button>
      </View>
      <View>
        {list.map((item, index) => {
          return (
            <View key={index} style={styles.list}>
              <Text style={styles.taskText} onPress={(e) => crossOut(e)}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 24,
  },
  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  list: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#aaa",
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    width: 300,
  },
  taskText: {
    listStyle: "none",
    margin: 0,
    marginLeft: 10,
    fontWeight: "bold",
  },
  buttonRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "120px",
  },
});
