import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import Task from '../components/Task';



// sample todo data
// const ItemData = [
//     {
//         currTime: 12321321,
//         title: 'First Item',
//         text: "abc",
//         completed: false
//     }
// ];


const HomeScreen = ({navigation}) => {

    const todoList = useSelector((state) => state.reducer);
    console.log(todoList);

    return (
        <View style={styles.primaryView}>
            <View style={styles.header}>
                <Text>Daily List</Text>
            </View>
            <Text>UPCOMING</Text>
            <FlatList
                data={todoList}
                renderItem={({ item }) => {
                    return (
                        item.completed === false ? <Task item={item} /> : null
                    )
                }}
                keyExtractor={item => item.currTime}
            />
            <Text>COMPLETED</Text>
            <FlatList
                data={todoList}
                renderItem={({ item }) => {
                    return (
                        item.completed === true ? <Task item={item} /> : null
                    )
                }}
                keyExtractor={item => item.currTime}
            />
            <View style={styles.footer}>
                <TouchableOpacity onPress={()=> navigation.navigate("AddTodo")} >
                    <Icon name="add-circle-outline" size={50} color="white" type='MaterialIcons' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    primaryView: {
        flex: 1,
        backgroundColor: '#79b5c0',
        width: '100%',
    },
    header: {
        marginTop: 10,
    },
    footer: {
        alignItems: 'center',
    },
});

export default HomeScreen;