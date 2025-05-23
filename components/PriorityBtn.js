import { TouchableOpacity, Text, } from "react-native"

export default function PriorityBtn({ funcPass, children, color, width, height }) {
  return (
    <TouchableOpacity onPress={funcPass} style={{ justifyContent: "center", alignItems: "center", width: width, height: height, marginTop: 20, backgroundColor: color, borderRadius: 10, opacity: 0.8 }}  >
      <Text style={{ color: "#fff" }}>{children}</Text>
    </TouchableOpacity >
  )
}
