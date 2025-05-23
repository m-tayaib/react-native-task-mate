import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"
export default function List({ task }) {



  const priorityColorHigh = task.priority === "low" ? "#3E4DE4" : task.priority === "medium" ? "#4CAF50" : "#FF4D4D"
  const taskIsCompleted = task.isCompleted



  return (
    <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
      <View style={style.listContainer}>
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <View style={{ backgroundColor: priorityColorHigh, height: 12, width: 12, borderRadius: 50, opacity: taskIsCompleted ? 0.5 : 1 }}></View>
          <View>
            <Text style={{ fontSize: 16, lineHeight: 24, fontWeight: "medium", color: taskIsCompleted ? "#9CA3AF" : "white", textDecorationLine: taskIsCompleted ? "line-through" : "none" }}>
              {task.title}
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 20, color: "#9CA3AF", fontWeight: "regular", textDecorationLine: taskIsCompleted ? "line-through" : "none" }}>{task.date}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TouchableOpacity>
            <Image style={{ width: 20, height: 20 }} source={
              taskIsCompleted
                ? require('../assets/cancel.png')
                : require('../assets/tick.png')
            } />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ width: 20, height: 20 }} source={require('../assets/delete.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 76,
    backgroundColor: "#1E1F2A",
    borderRadius: 12,
    paddingHorizontal: 16
  }
})