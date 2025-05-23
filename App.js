import { SafeAreaView, StyleSheet, FlatList, View } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar"
import Header from "./components/Header";
import TaskShow from "./components/TaskShow";
import FilterTask from "./components/FilterTask";
import List from "./components/List";
import OverView from "./components/OverView";
import AddTaskBtn from "./components/AddTaskBtn";
import CreateTaskScreen from "./screens/CreateTaskScreen";

export default function App() {
  const [isModelVisible, setIsModelVisible] = useState(false);

  const taskList = [
    { id: 1, priority: "low", title: "Design team meeting", date: new Date().toDateString(), isCompleted: true },
    { id: 2, priority: "low", title: "Submit project report", date: new Date().toDateString(), isCompleted: false },
    { id: 3, priority: "low", title: "Learn JavaScript basics", date: new Date().toDateString(), isCompleted: false },
    { id: 4, priority: "low", title: "Organize workspace", date: new Date().toDateString(), isCompleted: false },
    { id: 5, priority: "medium", title: "Doctor appointment", date: new Date().toDateString(), isCompleted: true },
    { id: 6, priority: "medium", title: "Team standup call", date: new Date().toDateString(), isCompleted: true },
    { id: 7, priority: "high", title: "Fix urgent bugs", date: new Date().toDateString(), isCompleted: true },
    { id: 8, priority: "medium", title: "Motivation session", date: new Date().toDateString(), isCompleted: true },
    { id: 9, priority: "low", title: "Read documentation", date: new Date().toDateString(), isCompleted: true },
    { id: 10, priority: "medium", title: "Practice coding problems", date: new Date().toDateString(), isCompleted: true },
  ];

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={style.container}>
        <Header />
        <TaskShow taskList={taskList} />
        <FilterTask />
        <View style={style.listBox}>
          <FlatList
            data={taskList}
            renderItem={({ item }) => <List task={item} />}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
        <OverView taskList={taskList} />
        <AddTaskBtn setIsModelVisible={setIsModelVisible} />
        {isModelVisible && <CreateTaskScreen isModelVisible={isModelVisible} setIsModelVisible={setIsModelVisible} />}
      </SafeAreaView >
    </>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121218',
    color: '#fff'
  },
  listBox: {
    height: 310,
    paddingTop: 10
  }
});