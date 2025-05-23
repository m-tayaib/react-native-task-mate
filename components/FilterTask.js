import { Text, View, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

const FILTERS = ["All", "Pending", "Completed"];

export default function FilterTaskBtns({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterPress = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter.toLowerCase());
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {FILTERS.map((filter) => (
          <Pressable
            key={filter}
            onPress={() => handleFilterPress(filter)}
            style={[
              styles.btn,
              activeFilter === filter && styles.activeBtn
            ]}
          >
            <Text style={styles.btnText}>{filter}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  container: {
    padding: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 24,
    borderWidth: 0.5,
    borderColor: "#C7C7C7",
    backgroundColor: "#1E1F2A",
    borderRadius: 8,
  },
  btn: {
    width: 115,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  activeBtn: {
    backgroundColor: "#6366F1",
  },
  btnText: {
    color: "#fff",
  },
});
