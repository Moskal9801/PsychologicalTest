import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BaseQuestion, questions } from '../BaseQuestions';

export default function QuestionScreen({navigation}) { 
  const[currentQuestion, setCurrentQuestion] = useState(0)
  const[score, setScore] = useState(0)
  const[showAnswer, setShowAnswer] = useState(false)

  const handleAnswerOptionClick = (point) => {
    setScore(score + point)
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }
    else {
      if(score <=150 && score >= 100){
        navigation.navigate("EndScreen1");
      }
      else if(score <=99 && score >= 75){
        navigation.navigate("EndScreen2");
      }
      else if(score <=74 && score >= 45){
        navigation.navigate("EndScreen3");
      }
      else if(score <=44){
        navigation.navigate("EndScreen4");
      }
    }  
  }
  return (
      <View style={styles.main}>
        <View style={styles.topic}>
          <Text style={styles.topicText}>Вопрос {currentQuestion + 1}</Text>
        </View>
  
        <View style={styles.top}>
          <View style={styles.topBorder}>
            <Text style={styles.topText}>{questions[currentQuestion].question}</Text>
          </View>
        </View>
  
        <View style={styles.bottom}>
          {questions[currentQuestion].answerOptions.map(item => (
            <TouchableOpacity style={styles.bottomAnswer} onPress={() => handleAnswerOptionClick(item.point)}>
              <Text style={styles.bottomAnswerText}>{item.answer}</Text>
            </TouchableOpacity>
          ))}
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
    paddingStart: '34%',
  },
  topicText: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 25,
  },
  top: {
    height: '50%',
  },
  topBorder: {
    height: '90%',
    borderWidth: 1,
    margin: '5%',
    padding: '5%',
  },
  topText: {
    fontFamily: 'GothamPro-Light',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: '50%',
  },
  bottom: {
    height: '40%',
  },
  bottomAnswer: {
    borderWidth: 1,
    marginHorizontal: '5%',
    marginVertical: '2%',
    padding: '2%',
  },
  bottomAnswerText: {
    textAlign: 'center',
    fontFamily: 'GothamPro-Light',
    fontSize: 20,
    textAlign: 'center',
  },
});