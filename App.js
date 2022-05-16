import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import LUA from './assets/LUA.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={LUA} style={{ width: 120, height: 120}} /> 
      <View style={styles.borda}> </View>
      <Text style={styles.textEstilo}>Eclipse lunar</Text>
      <Text style={styles.textEstilo}>A lua é o satelite natural do planeta Terra,distanciados por aproximadamente 384.405 km </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textEstilo: {
    color: '#ffffff'
  },
  borda: {
borderColor: 'white',
borderLeftWidth: 2,
borderBottomWidth: 2,
borderRightWidth: 2,
borderTopWidth: 2,
borderStyle: 'dotted'
  }
});
