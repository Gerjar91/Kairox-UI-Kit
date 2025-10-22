import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    base: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        borderColor: '#D1D5DB',
        color: '#374151',
    },
    focused: {
        borderColor: '#2563EB',
        borderWidth: 2,
    },
    error: {
        borderColor: '#EF4444',
        borderWidth: 2,
    },
    disabled: {
        backgroundColor: '#F9FAFB',
        borderColor: '#E5E7EB',
        color: '#9CA3AF',
    },
    small: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        fontSize: 14,
    },
    medium: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
    },
    large: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 18,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#374151',
        marginBottom: 4,
    },
    errorText: {
        fontSize: 12,
        color: '#EF4444',
        marginTop: 4,
    },
    helperText: {
        fontSize: 12,
        color: '#6B7280',
        marginTop: 4,
    },
    container: {
        marginBottom: 16,
    },
});
