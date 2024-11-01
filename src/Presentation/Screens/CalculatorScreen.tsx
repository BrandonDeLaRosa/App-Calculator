import { Pressable, View } from "react-native"
import { Text } from "react-native-paper"
import { colors, styles } from "../config/Themes/app.theme"
import { CalculatorButton } from "../Components/CalculatorButton"
import { useCalculator } from "../hooks/useCalculator"

export const CalculatorScreen = () => {

  const {
    number,
    buildNumber,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.mainResult}>{number}</Text>
      <Text style={styles.subResult}>15</Text>

      <View style={styles.row}>
        {/* //todo ROW 1 */}
        <CalculatorButton onPress={() => console.log('c')} label="C" color={colors.lightGray} doubleSize={false} />
        <CalculatorButton onPress={() => console.log("+/-")} label="+/-" color={colors.lightGray} doubleSize={false} />
        <CalculatorButton onPress={() => console.log("del")} label="del" color={colors.lightGray} doubleSize={false} />
        <CalculatorButton onPress={() => console.log("/")} label="/" color="orange" doubleSize={false} />
      </View>

      <View style={styles.row}>
        {/* //todo ROW 2 */}
        <CalculatorButton onPress={() => buildNumber("7")} label="7" color={colors.darkGray} doubleSize={false} />
        <CalculatorButton onPress={() => buildNumber("8")} label="8" color={colors.darkGray} doubleSize={false} />
        <CalculatorButton onPress={() => buildNumber("9")} label="9" color={colors.darkGray} doubleSize={false} />
        <CalculatorButton onPress={() => console.log("x")} label="x" color="orange" doubleSize={false} />
      </View>
      <View style={styles.row}>
        {/* //todo ROW 3 */}
        <CalculatorButton onPress={() => buildNumber("4")} label="4" color={colors.darkGray} doubleSize={false} />
        <CalculatorButton onPress={() => buildNumber("5")} label="5" color={colors.darkGray} doubleSize={false} />
        <CalculatorButton onPress={() => buildNumber("6")} label="6" color={colors.darkGray} doubleSize={false} />
        <CalculatorButton onPress={() => console.log("-")} label="-" color="orange" doubleSize={false} />
      </View>
      <View style={styles.row}>
        {/* //todo ROW 4 */}
        <CalculatorButton onPress={() => buildNumber("1")} label="1" color={colors.darkGray} doubleSize={false} />
        <CalculatorButton onPress={() => buildNumber("2")} label="2" color={colors.darkGray} doubleSize={false} />
        <CalculatorButton onPress={() => buildNumber("3")} label="3" color={colors.darkGray} doubleSize={false} />
        <CalculatorButton onPress={() => console.log("+")} label="+" color="orange" doubleSize={false} />
      </View>
      <View style={styles.row}>
        {/* //todo ROW 4 */}
        <CalculatorButton onPress={() => buildNumber("0")} label="0" color={colors.darkGray} doubleSize={true} />
        <CalculatorButton onPress={() => buildNumber(".")} label="." color={colors.darkGray} doubleSize={false} />
        <CalculatorButton onPress={() => console.log("=")} label="=" color="orange" doubleSize={false} />
      </View>
      <View style={styles.row}>

      </View>
    </View>
  )
}
