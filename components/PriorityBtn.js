import { TouchableOpacity, Text, } from "react-native"

export default function PriorityBtn({ funcPass, children, color, width, height }) {
  return (
    <TouchableOpacity onPress={funcPass} style={{ justifyContent: "center", alignItems: "center", width: width, height: height, marginTop: 20, backgroundColor: color, borderRadius: 10, opacity: 0.8 }}  >
      <Text style={{ color: "#fff" }}>{children}</Text>
    </TouchableOpacity >
  )
}
// const demoData = [
//   { id: 1, priority: "low", title: "Design team meeting", date: new Date().toDateString(), isCompleted: true },
//   { id: 2, priority: "low", title: "Submit project report", date: new Date().toDateString(), isCompleted: false },
//   { id: 3, priority: "low", title: "Learn JavaScript basics", date: new Date().toDateString(), isCompleted: false },
//   { id: 4, priority: "low", title: "Organize workspace", date: new Date().toDateString(), isCompleted: false },
//   { id: 5, priority: "medium", title: "Doctor appointment", date: new Date().toDateString(), isCompleted: true },
//   { id: 6, priority: "medium", title: "Team standup call", date: new Date().toDateString(), isCompleted: true },
//   { id: 7, priority: "high", title: "Fix urgent bugs", date: new Date().toDateString(), isCompleted: true },
//   { id: 8, priority: "medium", title: "Motivation session", date: new Date().toDateString(), isCompleted: true },
//   { id: 9, priority: "low", title: "Read documentation", date: new Date().toDateString(), isCompleted: true },
//   { id: 10, priority: "medium", title: "Practice coding problems", date: new Date().toDateString(), isCompleted: true },
// ];