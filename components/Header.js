import { View, Text, StyleSheet, Image } from 'react-native'

export default function Header() {
  return (
    <View style={style.container}>
      <Text style={style.headerTxt}>Memories</Text>
      <Image style={style.headerImg} source={require('../assets/img.png')} />
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    backgroundColor: '#1A1B25',
    height: 88,
    paddingTop: 44,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'start'
  },
  headerTxt: {
    color: 'white',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    textAlign: 'start'
  },
  headerImg: {
    width: 40,
    height: 40,
    borderRadius: 50
  }
});