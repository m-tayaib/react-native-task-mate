import { View, Text, Image, StyleSheet } from "react-native"

export default function OverView({ taskList }) {

  const highPriorityTask = taskList.filter((task) => task.priority === "high").length
  const mediumPriorityTask = taskList.filter((task) => task.priority === "medium").length
  const lowPriorityTask = taskList.filter((task) => task.priority === "low").length
  const totalTask = taskList.length
  const isCompletedTask = taskList.filter((task) => task.isCompleted).length
  const findPercentageOfTotalTask = ((isCompletedTask / totalTask) * 100)

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "semibold", color: "#fff", lineHeight: 28, fontFamily: "inter", marginTop: 10 }}>OverView</Text>
      <View style={{ flexDirection: "row", gap: 16, }}>
        <View style={style.progressBox} >
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Image style={{ width: 20, height: 20 }} source={require("../assets/lineBar.png")} />
            <Text style={{ fontSize: 16, fontWeight: "semibold", color: "#fff", lineHeight: 24, fontFamily: "inter" }}>Progress</Text>
          </View>

          <View style={{ width: 135, height: 8, backgroundColor: "#1A1B25", borderRadius: 50, marginTop: 8, borderWidth: 0.2, borderColor: "#C7C7C7" }}>
            <View style={{ width: `${findPercentageOfTotalTask}%`, height: 8, backgroundColor: "#3E4DE4", borderRadius: 50 }}></View>
          </View>
          <Text style={{ fontSize: 14, fontWeight: "regular", color: "#48B799", lineHeight: 20, fontFamily: "inter", marginTop: 8 }}>{findPercentageOfTotalTask}% Completed</Text>

        </View>
        <View style={style.priorityBox}>
          <Text style={{ fontSize: 16, fontWeight: "semibold", color: "#fff", lineHeight: 24, fontFamily: "inter" }}>Priority</Text>
          <View style={style.priorityStand}>
            <View style={{ backgroundColor: "#FF4B4B", height: 12, width: 12, borderRadius: 50 }}></View>
            <Text style={style.priorityTxt}>{highPriorityTask} High</Text>
          </View>
          <View style={style.priorityStand}>
            <View style={{ backgroundColor: "#4CAF50", height: 12, width: 12, borderRadius: 50 }}></View>
            <Text style={style.priorityTxt}>{mediumPriorityTask} Medium</Text>
          </View>
          <View style={style.priorityStand}>
            <View style={{ backgroundColor: "#3E4DE4", height: 12, width: 12, borderRadius: 50 }}></View>
            <Text style={style.priorityTxt}>{lowPriorityTask} Low</Text>
          </View>
        </View>
      </View>
    </View >
  )
}

const style = StyleSheet.create({
  progressBox: {
    height: 132,
    width: 167,
    backgroundColor: "#1E1F2A",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "start",
    paddingTop: 16
  },
  priorityBox: {
    height: 132,
    width: 167,
    backgroundColor: "#1E1F2A",
    borderRadius: 12,
    paddingTop: 16,
    alignItems: "start",
    justifyContent: "start",
    paddingHorizontal: 16
  },
  priorityStand: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "start",
  },
  priorityTxt: {
    color: "#B0B3C1",
    fontFamily: "inter",
    fontSize: 14,
    fontWeight: "regular",
    lineHeight: 20
  }
})
