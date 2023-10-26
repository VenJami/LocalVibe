import { View, Text } from 'react-native'
import React from 'react'

type Props = {
    navigation: any;
}

const SearchScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Home")}>Return</Text>
    </View>
  )
}

export default SearchScreen