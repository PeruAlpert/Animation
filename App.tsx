import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './navigation'

const App = () => {
  return (
    <View style={styles.container}>
        <Navigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{flex:1, paddingTop:Platform.OS === 'ios' ? 50 : 24,backgroundColor:'#fff'}
})
