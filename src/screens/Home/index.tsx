import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';
import { text } from 'node:stream/consumers';

export function Home() {
    const participants = ['Thiago', 'Thobias', 'Mathias', 'Mikaela', 'Tereza', 'Maria', 'Elo', 'julia', 'Macos', 'Joao', 'Biro', 'Bella']
    
    function handleParticipantAdd() {
        if (participants.includes("Thiago")) {
            return Alert.alert("Participante ja cadastrado", "Já existe um participante com esse noma na lista.");
        }
        participants.push("Ana")
        console.log("Você clicou")
    }
    function handleParticipantRemove(name: string) {
        // Tratamento de Alerta de confirmação. ( titulo, mensagem, butoes ficam dentro de uma array de objeto)
        Alert.alert("Remover", `Remover o particpante ${name}?`,[
            {
                text: "Sim",
                onPress: () => Alert.alert("Deletado!")
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
        console.log(`remove ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome de Evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#6b6b6b"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            {/* METODO DE SCROLL POR FLATLIST */}
            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant
                            key={item}
                            name={item}
                            onRemove={() => handleParticipantRemove(item)} />
                )}
                //para sumir barra de scroll
                showsVerticalScrollIndicator={false}
                //renderiza quando data estiver vazio
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguem chegou no evento ainda. Cadastre mais participantes.
                    </Text>
                )}
            />

            {/* METODO DE SCROLL POR SCROLLVIEW */}
            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participants => (
                        <Participant
                            key={participants}
                            name={participants}
                            onRemove={() => handleParticipantRemove("Thiago")} />
                    ))
                }
            </ScrollView> */}


        </View>
    )
}