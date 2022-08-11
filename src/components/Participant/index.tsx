import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Participant(){
    function handleParticipantAdd() {
        console.log("Você clicou")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                Thiago
            </Text>

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}