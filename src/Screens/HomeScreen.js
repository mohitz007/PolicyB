import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
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


const HomeScreen = ({ navigation }) => {

    const todoList = useSelector((state) => state.reducer);
    // console.log(todoList);

    if (todoList.length === 0) {
        return (
            <View style={styles.primaryView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Daily List</Text>
                </View>
                <Image
                    style={{ height: '85%', width: '100%' }}
                    source={require("../images/background.jpg")}
                />
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => navigation.navigate("AddTodo")} >
                        <Icon name="add-circle" size={50} color="white" style={styles.addButton} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.primaryView}>
            <View style={styles.header}>
                <Text style={styles.headerText}>DAILY LIST</Text>
            </View>
            <Text style={styles.headerText2}>UPCOMING</Text>
            <FlatList
                data={todoList}
                renderItem={({ item }) => {
                    return (
                        item.completed === false ? <Task item={item} /> : null
                    )
                }}
                keyExtractor={item => item.currTime}
            />
            <Text style={styles.headerText2}>COMPLETED</Text>
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
                <TouchableOpacity onPress={() => navigation.navigate("AddTodo")} >
                    <Icon name="add-circle" size={50} color="white" style={styles.addButton} />
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
        alignItems: 'center',
    },
    footer: {
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
    },
    addButton: {
        shadowColor: 'white',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 20,
        marginBottom: 10,
    },
    headerText2: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
        marginLeft: 20,
    },
});

export default HomeScreen;