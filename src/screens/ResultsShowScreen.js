import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import useSingleResult from '../hooks/useSingleResult';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const [result] = useSingleResult(id)

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    borderRadius: 4
  }
});

export default ResultsShowScreen;
