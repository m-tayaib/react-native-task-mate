import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, FlatList, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import TaskShowItems from "./components/TaskShow";
import FilterTaskBtns from "./components/FilterTask";
import List from "./components/List";
import OverView from "./components/OverView";
import AddTaskBtn from "./components/AddTaskBtn";
import CreateTaskScreen from "./screens/CreateTaskScreen";

export default function App() {
  const [isModelVisible, setIsModelVisible] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const filterTasks = (type) => {
    switch (type) {
      case "all":
        setFilteredTasks(allTasks);
        break;
      case "completed":
        setFilteredTasks(allTasks.filter((item) => item.isCompleted));
        break;
      case "pending":
        setFilteredTasks(allTasks.filter((item) => !item.isCompleted));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setFilteredTasks(allTasks);
  }, [allTasks]);

  const handleComplete = (id) => {
    const updated = allTasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setAllTasks(updated);
  };

  const handleDelete = (id) => {
    const updated = allTasks.filter((task) => task.id !== id);
    setAllTasks(updated);
  };

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Header />
        <TaskShowItems taskList={allTasks} />
        <FilterTaskBtns onFilterChange={filterTasks} />
        <View style={styles.listBox}>
          <FlatList
            data={filteredTasks}
            renderItem={({ item }) => (
              <List
                task={item}
                onComplete={handleComplete}
                onDelete={handleDelete}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={
              <View>
                <Text style={{ color: "#ccc", textAlign: "center" }}>
                  No tasks to display
                </Text>
              </View>
            }
          />
        </View>
        <OverView taskList={allTasks} />
        <AddTaskBtn setIsModelVisible={setIsModelVisible} />
        {isModelVisible && (
          <CreateTaskScreen
            setAllTasks={setAllTasks}
            isModelVisible={isModelVisible}
            setIsModelVisible={setIsModelVisible}
          />
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121218",
  },
  listBox: {
    height: 310,
    paddingTop: 10,
  },
});
