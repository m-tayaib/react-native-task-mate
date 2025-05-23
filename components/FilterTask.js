import { Text, View, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

export default function FilterTaskBtns({ allTaskShow, completedTaskShow, pendingTaskShow }) {
  const [filterBtnColor, setFilterBtnColor] = useState("All");

  const showAllTasks = () => {
    setFilterBtnColor("All")
    allTaskShow()
  }
  const showPendingTasks = () => {
    setFilterBtnColor("Pending")
    pendingTaskShow()
  }
  const showCompletedTasks = () => {
    setFilterBtnColor("Completed")
    completedTaskShow()
  }
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={style.taskFilterContainer}>
        <Pressable onPress={showAllTasks} style={[style.btn, { backgroundColor: filterBtnColor === "All" ? "#6366F1" : null }]}  >
          <Text style={{ color: "#fff" }} >All</Text>
        </Pressable>
        <Pressable style={[style.btn, { backgroundColor: filterBtnColor === "Pending" ? "#6366F1" : null }]} onPress={showPendingTasks}>
          <Text style={{ color: "#fff" }}> Pending</Text>
        </Pressable>
        <Pressable style={[style.btn, { backgroundColor: filterBtnColor === "Completed" ? "#6366F1" : null }]} onPress={showCompletedTasks}>
          <Text style={{ color: "#fff" }}>Completed</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  taskFilterContainer: {
    padding: 2,
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
    gapHorizontal: 15,
    marginTop: 24,
    borderWidth: 0.5,
    borderColor: "#C7C7C7",
    backgroundColor: "#1E1F2A",
    borderRadius: 8
  },
  btn: {
    width: 115,
    height: 36,
    color: "#fff",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    borderRadius: 8,
    opacity: 1

  },
});
