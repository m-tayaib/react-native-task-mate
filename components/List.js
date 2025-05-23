import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

export default function List({ task, onComplete, onDelete }) {
  const priorityColor = task.priority === "low"
    ? "#3E4DE4"
    : task.priority === "medium"
      ? "#4CAF50"
      : "#FF4D4D";

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <View
            style={[
              styles.priorityDot,
              {
                backgroundColor: priorityColor,
                opacity: task.isCompleted ? 0.5 : 1,
              },
            ]}
          />
          <View>
            <Text
              style={[
                styles.title,
                task.isCompleted && styles.completedText,
              ]}
            >
              {task.title}
            </Text>
            <Text
              style={[
                styles.date,
                task.isCompleted && styles.completedText,
              ]}
            >
              {task.date}
            </Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity onPress={() => onComplete(task.id)}>
            <Image
              style={styles.icon}
              source={
                task.isCompleted
                  ? require("../assets/cancel.png")
                  : require("../assets/tick.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(task.id)}>
            <Image
              style={styles.icon}
              source={require("../assets/delete.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 76,
    backgroundColor: "#1E1F2A",
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  priorityDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    color: "white",
  },
  date: {
    fontSize: 14,
    lineHeight: 20,
    color: "#9CA3AF",
  },
  completedText: {
    color: "#9CA3AF",
    textDecorationLine: "line-through",
  },
  rightSection: {
    flexDirection: "row",
    gap: 16,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
