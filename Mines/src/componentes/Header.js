import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Button } from 'native-base'
import Flag from './Flag'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer} >
                <Text style={styles.timer}> {props.minute}:{props.timer} </Text>
                <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
            <Button onPress={props.onNewGame}style={styles.button}>
                <Text style={styles.buttonLabel}> Novo Jogo </Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 10
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#999',
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
    },
    timer: {
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 20,
        backgroundColor: '#000',
        color: 'red',
    }
})