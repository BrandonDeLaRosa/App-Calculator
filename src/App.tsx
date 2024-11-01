import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import { CalculatorScreen } from './Presentation/Screens/CalculatorScreen';
import { styles } from './Presentation/config/Themes/app.theme';

export const  App  = () => {
  return (
    <View style={[styles.calculatorContainer, { flex: 1, backgroundColor:"black" },]}>
      <StatusBar />
        <CalculatorScreen />
      </View>
  );
}
export default App;
