import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function EndScreen4({navigation}) {
  return (
    <View style={styles.main}>
        <View style={styles.top}>
          <Text style={styles.topText}>Вас абсолютно не интересуют сокровенные мысли тех, кто рядом с вами. Вы слишком заняты, вам некогда анализировать даже собственные поступки, не то что чужие.</Text>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity style={styles.buttons} onPress={() => {navigation.navigate("StartScreen");}}>
            <Text style={styles.buttonsText}>Главное меню</Text>
          </TouchableOpacity>
        </View>
        
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  top: {
    height: '70%',
  },
  topText: {
    fontFamily: 'GothamPro-Light',
    fontSize: 35,
    marginHorizontal: '5%',
    marginVertical: '35%',
    textAlign: 'center',
  },
  bottom: {
    height: '30%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttons: {
    marginVertical: '20%',
  },
  buttonsText: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 28,
    borderWidth: 1,
    borderRadius: 3,
    padding: '2.5%',
  },
});