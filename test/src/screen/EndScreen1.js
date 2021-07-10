import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function EndScreen1({navigation}) {
  return (
    <View style={styles.main}>
        <View style={styles.top}>
          <Text style={styles.topText}>Бесспорно, вы чрезвычайно наблюдательны. Вместе с тем вы способны анализировать и самого себя, свои поступки. Вы в состоянии с замечательной точностью оценить другого человека.</Text>
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