import React from "react";
import {View,Text,StyleSheet} from "react-native";
import { Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useDispatch } from "react-redux";
import moment from "moment";
import { delete_todo } from "../redux/action";
import { complete_todo } from "../redux/action";
import { uncomplete_todo } from "../redux/action";

const Task = ({item}) => {

    const dispatch = useDispatch();

    const handleDelete = (currTime) => {
        // console.log(currTime);
        dispatch(delete_todo(currTime));
    };

    const handleComplete = (currTime) => {
        // console.log(currTime);
        dispatch(complete_todo(currTime));
    };

    const handleUncomplete = (currTime) => {
        // console.log(currTime);
        dispatch(uncomplete_todo(currTime));
    };

    let date = moment.unix(item.currTime/1000).format('Do MMMM, h:mm a');
    // console.log(date);

    return (
        <View style={!item.completed? Styles.containerUncompleted : Styles.containerCompleted}>
            {
            !item.completed ?
            <Icon name="crop-square" type="Ionicons" size={22} onPress={() => handleComplete(item.currTime)} /> 
            : 
            <AntDesign name="checksquareo" size={20} onPress={() => handleUncomplete(item.currTime)} />
            }
            <View style={Styles.textContainer}>
                {
                    !item.completed ?
                    <Text style={Styles.title}>{item.title}</Text>
                    :
                    <Text style={[Styles.title,{textDecorationLine:"line-through",textDecorationStyle:"solid"}]}>{item.title}</Text>
                }
                <Text style={Styles.text}>{item.text.length>40?item.text.substring(0, 40) + "...": item.text}</Text>
                <Text style={Styles.date}>{date}</Text>

            </View>
            <Ionicons name="trash-bin-outline" size={20} onPress={() => handleDelete(item.currTime)} />
        </View>
    )
}


const Styles = StyleSheet.create({
    containerUncompleted: {
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        width: "95%",
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 7,
        paddingHorizontal: 7,
        height: 75,
    },
    containerCompleted: {
        backgroundColor: "#9fd1df",
        borderColor: "#000000",
        width: "95%",
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 7,
        paddingHorizontal: 7,
        height: 75,
    },
    title: {
        fontSize: 20,
        color: "#000000",
        fontWeight: "bold",
        paddingTop: 5,
        marginTop: 5,
    },
    text: {
        fontSize: 15,
        paddingBottom: 5,    
    },
    date: {
        left: "70%", 
        paddingBottom: 5,
        color: "#0a0a0a",
        marginBottom: 4,
    },
    textContainer: {
        alignItems: "flex-start",
        alignContent: "flex-start",
        width: "86%",
        shadowColor: "white",
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.5,
    }
})


export default Task;