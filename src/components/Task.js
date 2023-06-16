import React from "react";
import {View,Text,StyleSheet} from "react-native";
import { Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useDispatch } from "react-redux";
import { delete_todo } from "../redux/action";
import { complete_todo } from "../redux/action";
import { uncomplete_todo } from "../redux/action";

const Task = ({item}) => {

    const dispatch = useDispatch();

    const handleDelete = (currTime) => {
        console.log(currTime);
        dispatch(delete_todo(currTime));
    };

    const handleComplete = (currTime) => {
        console.log(currTime);
        dispatch(complete_todo(currTime));
    };

    const handleUncomplete = (currTime) => {
        console.log(currTime);
        dispatch(uncomplete_todo(currTime));
    };

    return (
        <View style={Styles.container}>
            {
            !item.completed ?
            <Icon name="crop-square" type="Ionicons" size={20} onPress={() => handleComplete(item.currTime)} /> 
            : 
            <AntDesign name="checksquareo" size={20} onPress={() => handleUncomplete(item.currTime)} />
            }
            <View>
                <Text>{item.title}</Text>
                <Text style={Styles.text}>{item.text}</Text>
            </View>
            <Ionicons name="trash-bin-outline" size={20} onPress={() => handleDelete(item.currTime)} />
        </View>
    )
}


const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        width: "100%",
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        color: "#000000",
    },
    text: {
            
        },
})


export default Task;