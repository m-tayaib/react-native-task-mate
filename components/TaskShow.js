
import { View, Text, StyleSheet } from 'react-native'

export default function TaskShow({ taskList }) {
  const totalTask = taskList.length
  const pendingTask = taskList.filter((task) => !task.isCompleted).length
  const isCompletedTask = taskList.filter((task) => task.isCompleted).length

  return (
    <View style={style.taskBoxesContainer}>

      <View style={style.taskBox}>
        <Text style={[style.taskBoxTitle, { color: "#E4D9C8" }]}>Total Task</Text>
        <Text style={style.taskBoxCount}>{totalTask}</Text>
      </View>


      <View style={style.taskBox}>
        <Text style={[style.taskBoxTitle, { color: "#FFB74D" }]} >Pending</Text>
        <Text style={style.taskBoxCount} >{pendingTask}</Text>
      </View>



      <View style={style.taskBox}>
        <Text style={[style.taskBoxTitle, { color: "#4CAF50" }]}> Completed</Text>
        <Text style={style.taskBoxCount}>{isCompletedTask}</Text>
      </View>
    </View >
  )
}

const style = StyleSheet.create({
  taskBoxesContainer: {
    paddingHorizontal: 20,

    flexDirection: "row",
    gap: 16,
    alignItems: "start",
    justifyContent: "space-between",
    marginTop: 16,
  },
  taskBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    width: 106,
    height: 108,
    backgroundColor: "#1E1F2A",
    borderRadius: 12
  },
  taskBoxTitle: {
    fontFamily: "inter",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "medium",
  },
  taskBoxCount: {
    fontFamily: "inter",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 3
  }

})