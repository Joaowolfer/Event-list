import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "@/src/components/Participant";

import { styles } from './style';
import { useState } from "react";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert('Participante já cadastrado', 'Já existe alguém com este nome na lista!')
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Atenção', `Deseja realmente remover ${name} de sua lista?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant != name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}>Nome do Evento</Text>

            <Text style={styles.eventDate}>Sábado, 7 de setembro de 2024</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={"#6B6B6B"}
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item} name={item} onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ainda não adicionou ninguém? Faça agora mesmo a sua lista de presença e não deixe a galera de fora!
                    </Text>
                )}
            />
        </View>
    )
}