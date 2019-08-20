import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results, navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
      <ResultsDetail result={item} />
    </TouchableOpacity>)
  
  if (!results.length) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  }
})

export default withNavigation(ResultsList)
