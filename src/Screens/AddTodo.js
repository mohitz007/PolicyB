import React,{useState} from "react";
import {View,Text,TextInput} from "react-native";
import { add_todo } from "../redux/action";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";

const AddTodo = ({navigation}) => {

    const [title,setTitle] = useState("");
    const [text,setText] = useState("");

    
    const dispatch = useDispatch();
    
    const handleAddTodo = (item) => {
        let currTime = Date.now();
        console.log(currTime);
        item = {...item,currTime: currTime,completed: false};
        console.log(item);
        dispatch(add_todo(item));
        navigation.goBack();
      };

    return (
        <View style={{backgroundColor: "#fefde5",flex:1}}>
            <TextInput
            placeholder="Title"
            onChangeText={setTitle}
            value={title}
            />
            <TextInput 
            placeholder="Start typing..."
            onChangeText={setText}
            value={text}
            />
            <Icon name="check" type="EvilIcons" color="black" size={50} onPress={() => handleAddTodo({title,text})} />
        </View>
    )
};



export default AddTodo;