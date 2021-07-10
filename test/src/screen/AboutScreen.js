import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AboutScreen({navigation}) {
  return (
    <View style={styles.main}>
      <View style={styles.topic}>
        <TouchableOpacity onPress={() => {navigation.navigate("StartScreen");}}>
          <Text style={styles.topicText}>Назад</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.about}>
        <Text style={styles.aboutText1}>О нас:</Text>
        <Text style={styles.aboutText2}>Привет, мы начинающая группа девелоперов, которая хочет хоть что-то сделать полезное. У нас грандиозные планы, которые мы постараемся реализовать. Apple, Microsoft, Facebook... Что их объединяет? Их объединяет то, что они начинали так же, как и мы! Вы скоро увидите нас!</Text>
      </View>

      <View style={styles.contacts}>
        <Text style={styles.contactsText1}>Контакты:</Text>
        <Text style={styles.contactsText2}>Варвенко Виталий-{"\n"}Скориков Данила-{"\n"}Ефимов Иннокентий-{"\n"}Шурыгин Тимур-</Text>
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
  topic: {
    height: '10%',
    paddingTop: '15%',
    paddingStart: '5%',
  },
  topicText: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 23,
  },
  about: {
    height: '45%',
  },
  aboutText1: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 25,
    textAlign: 'center',
  },
  aboutText2: {
    fontFamily: 'GothamPro-Light',
    fontSize: 20,
    lineHeight: 29,
    textAlign: 'justify',
    padding: '5%',
  },
  contacts: {
    height: '45%',
  },
  contactsText1: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 25,
    textAlign: 'center',
  },
  contactsText2: {
    fontFamily: 'GothamPro-Light',
    fontSize: 20,
    lineHeight: 29,
    textAlign: 'justify',
    padding: '5%',
  },
});