import React,{useState} from "react";
import {View,Text,TextInput} from "react-native";
import { add_todo } from "../redux/action";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/EvilIcons"

const AddTodo = ({navigation}) => {

    const [title,setTitle] = useState("");
    const [text,setText] = useState("");

    
    const dispatch = useDispatch();
    
    const handleAddTodo = (item) => {

        if (item.title === "") {
            alert("Title is required");
            return;
        }
        let currTime = Date.now();
        // console.log(currTime);
        item = {...item,currTime: currTime,completed: false};
        // console.log(item);
        dispatch(add_todo(item));
        navigation.goBack();
      };

    return (
        <View style={{backgroundColor: "#fefde5",flex:1}}>
            <TextInput
            style={styles.title}
            placeholder="Title"
            onChangeText={setTitle}
            value={title}
            autoCapitalize="sentences"
            />
            <TextInput 
            placeholder="Start typing..."
            onChangeText={setText}
            value={text}
            />
            <Icon name="check" size={50} onPress={() => handleAddTodo({title,text})} style={styles.createButton} />
        </View>
    )
};

const styles = StyleSheet.create({
    createButton: {
        position: 'absolute',
        right: 30,
        bottom: 60,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#efa109',
        color: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});


export default AddTodo;