import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#131016',
        padding: 24,
        flex: 1
    },

    eventName: {
        fontWeight: 'bold',
        marginTop: 48,
        fontSize: 24,
        color: '#FFF'
    },

    eventDate: {
        fontSize: 16,
        color: '#6B6B6B'
    },

    input: {
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        marginRight: 12,
        fontSize: 16,
        padding: 16,
        height: 56,
        color: '#FFF',
        flex: 1
    },

    button: {
        backgroundColor: '#31CF67',
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

    form: {
        flexDirection: 'row',
        marginBottom: 42,
        marginTop: 36,
        width: '100%',
    },

    listEmptyText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#FFF'
    }
});