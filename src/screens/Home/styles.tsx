import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7A4A9E",
        padding: 24,
        alignItems: "flex-start",
        gap: 10
    },
    title: {
        paddingTop: 54,
        flexDirection: "column"
    },
    titleText: {
        color: "#F2F2F2",
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 28.8
    },
    titleDescription: {
        color: "#F2F2F2",
        fontSize: 16,
        lineHeight: 19.2,
        fontWeight: 400
    }
})