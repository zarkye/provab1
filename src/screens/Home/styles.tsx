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
    },
    inputWrapper: {
        width: "100%",
        height: 51,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
        flexDirection: "row",
    },
    textInput: {
        width: 315,
        backgroundColor: "#F2F2F2",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderColor: "#808080",
        padding: 16,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5, 
    },
    addButton: {
        backgroundColor: "#31C667",
        width: 51,
        height: 51,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        color: "#fff"
    },
    pendindTasksText: {
        color: "#F2F2F2",
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 24,
        marginTop: 34,
    },
    list: {
        marginTop: 8
    },
    emptyList: {
        width: "100%",
        height: 579,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyListText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 19.2,
        color: "#F2F2F2"

    }
})