import { Pressable, Text, StyleSheet } from "react-native"

export default function AddTaskBtn({ setIsModelVisible
}) {
  return (
    <Pressable style={style.btn} onPress={() => setIsModelVisible(true)}>
      <Text style={style.btnTxt}>+</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  btn: {
    position: "absolute",
    right: 20,
    bottom: 53,
    width: 56,
    height: 56,
    backgroundColor: "#3E4DE4",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  btnTxt: {
    color: "#fff",
    fontSize: 36
  }
})