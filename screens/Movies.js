import React, {useEffect} from 'react';
import {View, Text, Flatlist, Image, TouchableOpacity} from 'react-native';


function Movies() {
  return (
    <View style={styles.container}>
      <Text>Movies</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Movies;
