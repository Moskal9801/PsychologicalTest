import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

export default function StartScreen({navigation}) {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Image source={{
          width: Dimensions.get('window').width,
          height: 320,
          uri:"https://lh3.googleusercontent.com/proxy/dxmqsDs8Sr-EIZ5pOp1Va9ctESpr5ubQ6vAmb7Z1b0BWtoWyjs3g_sO1jE_H52WEz-oBZyjG4YylyNw_VTJSI9EHpi3ZE-mAcjNfYGHaav5S"}}/>
        <View style={styles.nameApp}>
          <Text style={styles.nameAppText}>Психологический</Text>
          <Text style={styles.nameAppText}>тест:</Text>
          <Text style={styles.nameAppText}>"Наблюдательность"</Text>
        </View>
      </View>

      <View style={styles.middle}>
        <TouchableOpacity style={styles.buttons} onPress={() => {navigation.navigate("QuestionScreen");}}>
          <Text style={styles.buttonsText}>Начать</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => {navigation.navigate("QuestionScreen");}}>
          <Text style={styles.buttonsText}>Выйти</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <View style={styles.copyright}>
          <Text style={styles.copyrightText}>©IndieCompany</Text>
        </View>
        <TouchableOpacity style={styles.about} onPress={() => {navigation.navigate("AboutScreen");}}>
          <Text style={styles.aboutText}>?</Text>
        </TouchableOpacity>
      </View> 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    height: '60%',
  },
  nameApp: {
    paddingTop: '13%',
    alignItems: 'center',
  },
  nameAppText: {
    fontFamily: 'GothamPro-Light',
    fontSize: 33,
    paddingTop: '1%',
  },
  middle: {
    height: '35%',
    paddingTop: '13%',
  },
  buttons: {
    alignItems: 'center',
    paddingTop: '7%',
  },
  buttonsText: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 28,
    borderWidth: 1,
    borderRadius: 3,
    padding: '3%',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    height: '5%',
  },
  copyright: {
    width: '87%',
    fontFamily: 'GothamPro-Light',
    fontSize: 17,
    paddingTop: '2.8%',
    paddingStart: '32%',
  },
  copyrightText: {
    fontFamily: 'GothamPro-Light',
    fontSize: 17,
  },
  about: {
    width: '13%',
    paddingStart: '5%',
    paddingTop: '1%',
  },
  aboutText: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 25,
  },
});
