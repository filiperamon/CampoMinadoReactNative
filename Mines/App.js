import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert, TouchableWithoutFeedback} from 'react-native';
import params from './src/Params'
import MineField from './src/componentes/MineField'
import {   createMinedBoard,
          cloneBoard,
          openField,
          hadExplosion,
          wonGame,
          showMines
} from './src/Service'

export default class App extends Component {

  constructor(props) {
    super(props)
    console.log('Entrou no construtor')
    this.state = this.createState()
    console.log(this.state.board)
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Perdeu', 'Pato')
    }

    if(won){
      Alert.alert('Parabens', 'Voce Venceu!')
    }

    this.setState({
      board, lost, won
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
            <Text style={{fontSize: 40, backgroundColor: '#eee'}} onPress={() => this.setState(this.createState())}>
              Clique para Novo Jogo 
            </Text>
        </TouchableWithoutFeedback>
        <View style={styles.board}>
          <MineField board={this.state.board} 
              onOpenField={this.onOpenField}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  }
});
