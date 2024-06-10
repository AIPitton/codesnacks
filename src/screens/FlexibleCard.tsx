import { View, Text } from 'react-native'
import React from 'react'

const FlexibleCard = () => {
  return (
    <View className="w-4/5 bg-b rounded-xl justify-top items-center">
      <View className="flex-grow">
        <Text className="px-2 text-xl text-B">{text}</Text>
      </View>
    </View>
  )
}

export default FlexibleCard

// card with a background color that extends to fit the text content.
