import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import ButtonLevel from '../componentes/ButtonLevel'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel} 
                visible={props.isVisible}
                animationType='slide'
                transparent={true}>
                <View style={styles.frame}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Selecione o Nível</Text>
                        <ButtonLevel onLevelSelected={ () => props.onLevelSelected(0.1) } label='Fácil' success/>
                        <ButtonLevel onLevelSelected={ () => props.onLevelSelected(0.2) } label='Intermediário' warning/>
                        <ButtonLevel onLevelSelected={ () => props.onLevelSelected(0.3) } label='Difícil' danger/>
                        <TouchableOpacity
                            onPress={() => props.onLevelSelected(0.3)}>
                            <ButtonLevel label='Difícil'/>
                        </TouchableOpacity>
                    </View>
                </View>
                </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
})