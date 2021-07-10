import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { bootstrap } from './src/Bootstrap';
import StartScreen from './src/screen/StartScreen';
import AboutScreen from './src/screen/AboutScreen';
import QuestionScreen from './src/screen/QuestionScreen';
import EndScreen1 from './src/screen/EndScreen1';
import EndScreen2 from './src/screen/EndScreen2';
import EndScreen3 from './src/screen/EndScreen3';
import EndScreen4 from './src/screen/EndScreen4';

export default function App() {
  const Main = createStackNavigator();
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return(
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err => console.log(err))}
      />
    )
  }

  return (
    <NavigationContainer>
      <Main.Navigator headerMode="none">
        <Main.Screen name="StartScreen" component={StartScreen}/>
        <Main.Screen name="AboutScreen" component={AboutScreen}/>
        <Main.Screen name="QuestionScreen" component={QuestionScreen}/>
        <Main.Screen name="EndScreen1" component={EndScreen1}/>
        <Main.Screen name="EndScreen2" component={EndScreen2}/>
        <Main.Screen name="EndScreen3" component={EndScreen3}/>
        <Main.Screen name="EndScreen4" component={EndScreen4}/>
      </Main.Navigator>
    </NavigationContainer>
  );
}

