import React from 'react'
import { Button, Text } from 'native-base'

export default props => {
    
    return (
        <>
            {props.success ? 
                    <Button onPress={props.onLevelSelected} block success>
                    <Text>{props.label}</Text>
                </Button>
            : false}
            {props.warning ? 
                <Button onPress={props.onLevelSelected} block warning>
                <Text>{props.label}</Text>
            </Button>
            : false}
            {props.danger ? 
                    <Button onPress={props.onLevelSelected} block danger>
                    <Text>{props.label}</Text>
                </Button>
            : false}
        </>
    )
}