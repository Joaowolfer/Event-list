import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "@/src/components/Participant";

import { styles } from './style';

export function Home() {

    const participants = ['Cindy', 'Samuel', 'Gonix', 'Felipe', 'Muriel', 'Anthony', 'Victor', 'Gabriel', 'Vinícius']

    function handleParticipantAdd() {
        if (participants.includes('Cindy')) {
            return Alert.alert('Participante já cadastrado', 'Já existe alguém com este nome na lista!')
        }
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Atenção', `Deseja realmente remover ${name} de sua lista?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Usuário removido.')
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