import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    base: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        gap: 8,
    },
    solid: {
        backgroundColor: '#2563EB',
    },
    outline: {
        borderWidth: 2,
        borderColor: '#2563EB',
        backgroundColor: 'transparent',
    },
    link: {
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
    },
    text: {
         fontWeight: '600' 
        },
    solidText: { color: '#FFFFFF' },
    outlineText: { color: '#2563EB' },
    linkText: { color: '#2563EB' },

    disabled: {
        opacity: 0.5,
    },
}); 