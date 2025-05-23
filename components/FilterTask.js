import { Text, View, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

export default function FilterTask({ pendingTaskShow }) {
  const [filterBtnColor, setFilterBtnColor] = useState("All");


  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={style.taskFilterContainer}>
        <Pressable style={[style.btn, { backgroundColor: filterBtnColor === "All" ? "#6366F1" : null }]} onPress={() => setFilterBtnColor("All")}>
          <Text style={{ color: "#fff" }} >All</Text>
        </Pressable>
        <Pressable onPress={pendingTaskShow} style={[style.btn, { backgroundColor: filterBtnColor === "Pending" ? "#6366F1" : null }]} onPress={() => setFilterBtnColor("Pending")}>
          <Text style={{ color: "#fff" }}> Pending</Text>
        </Pressable>
        <Pressable style={[style.btn, { backgroundColor: filterBtnColor === "Completed" ? "#6366F1" : null }]} onPress={() => setFilterBtnColor("Completed")}>
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

    borderRadius: 8,
    opacity: 1

  },
});
