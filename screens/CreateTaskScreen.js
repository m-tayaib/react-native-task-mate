import { Modal, View, StyleSheet, TextInput, Text, Image, Pressable } from 'react-native'
import PriorityBtn from '../components/PriorityBtn'

export default function CreateTaskScreen({ isModelVisible, setIsModelVisible }) {


  return (
    <Modal visible={isModelVisible} animationType="slide"   >

      <View style={style.modelView} >

        <Pressable onPress={() => setIsModelVisible(false)} style={style.backBtn}>
          <Image source={require('../assets/back.png')} style={{ width: 24, height: 24 }} />
        </Pressable>


        <Text style={style.HeadingTxt}>Add New Task</Text>
        <View>
          <TextInput style={style.taskInput} placeholder='What need to be done?' maxLength={30} placeholderTextColor={"#6B7280"} />
          <TextInput style={style.taskInput} placeholder='Date of task?' maxLength={15} dataDetectorTypes={"date"} calendarEvents={true} placeholderTextColor={"#6B7280"} />
        </View>
        <View>
          <Text style={style.priorityTxt}>Task Priority</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <PriorityBtn width={106} height={40} color="#FF4D4D">High</PriorityBtn>
            <PriorityBtn width={106} height={40} color="#4CAF50">Medium</PriorityBtn>
            <PriorityBtn width={106} height={40} color="#4A4FE4">Low</PriorityBtn>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
          <PriorityBtn width={350} height={40} color="#207BFF">Create Task</PriorityBtn>
        </View>
      </View>

    </Modal>
  )
}

const style = StyleSheet.create({
  modelView: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#121218"
  },
  HeadingTxt: {
    fontSize: 20, paddingTop: 20, fontWeight: "500", color: "#fff", fontFamily: "inter", lineHeight: 28, textAlign: "center"
  },
  taskInput: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: "#1E1F2A",
    color: "#fff",
    borderRadius: 8,
    marginTop: 20
  },
  priorityTxt: {
    fontSize: 16, fontWeight: "medium", color: "#9CA3AF", lineHeight: 24, fontFamily: "inter", marginTop: 20
  },
  backBtn: {
    position: "absolute",
    zIndex: 9999,
    top: 20,
    left: 20
  }
})
