import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
    const [participants, setParticipants]= useState<string[]>([]);
    const [participantName, setParticipantName] = useState("");
    
    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante ja cadastrado", "Já existe um participante com esse noma na lista.");
        }
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {
        // lógica de exluir participante
        // return console.log(participants.filter(participant => participant !== name));

        // Tratamento de Alerta de confirmação. ( titulo, mensagem, butoes ficam dentro de uma array de objeto)
        Alert.alert("Remover", `Remover o particpante ${name}?`,[
            {
                text: "Sim",
                //logica de escluir adicionada ao clica no botao;
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
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
                    // onChangeText={text => (setParticipantName(text))} outra forma de fazer.
                    onChangeText={setParticipantName}
                    value={participantName}
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