import { useState } from 'react'
import { View, Text, TextInput  } from 'react-native'
import { styles } from './styles'

export function SignIn(){
    const [text, setText] = useState('')
    return(
        <View style={styles.container}>
        <Text> Hello Word</Text>

        <TextInput 
            style={styles.Input}  
            onChangeText={setText}
        />

        <Text>
            Voce Digitou {text}
        </Text>
        </View>
    )
}

