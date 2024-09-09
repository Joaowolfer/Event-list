import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1E25',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
    },

    name: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
        flex: 1
    },

    button: {
        backgroundColor: '#E23C44',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 56,
        width: 56
    },

    buttonText: {
        fontSize: 24,
        color: '#FFF'
    },
})