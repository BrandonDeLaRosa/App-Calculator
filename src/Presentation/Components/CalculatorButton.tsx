import { Pressable, Text } from "react-native"
import { styles, colors } from "../config/Themes/app.theme"


interface Props {
    label:string;
    color: string;
    doubleSize: boolean;
    onPress: () => void;
}

export const CalculatorButton = ({
    label,
    color= colors.darkGray,
    doubleSize = false,
    onPress,
}: Props) => {

    return (
        <Pressable 
        onPress={() => onPress()}
        style={({pressed}) => ({
            ...styles.button,
            backgroundColor:color, 
            width: (doubleSize) ? 180 : 80,
            opacity: (pressed) ? 0.5 : 1,
        })}>
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>)
}
